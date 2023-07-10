import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [entertitle, setEnteredTitle] = useState("");
  const [enterAmount, setEneteredAmount] = useState("");
  const [enterDate, setEnteredDate] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  const TitleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const AmountHandler = (event) => {
    setEneteredAmount(event.target.value);
  };

  const DateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    const ExpenseData = {
      title: entertitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };
    props.onSaveExpenseData(ExpenseData);
    setEneteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  const toggleFormVisibility = () => {
    setIsFormVisible((prevIsFormVisible) => !prevIsFormVisible);
  };

  if (!isFormVisible) {
    return (
      <button type="button" onClick={toggleFormVisibility}>
        Add Expense
      </button>
    );
  }

  return (
    <form onSubmit={SubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={entertitle} onChange={TitleHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enterAmount} onChange={AmountHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enterDate} onChange={DateHandler}></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={toggleFormVisibility}>
          Cancel
        </button>
        <button type="submit">Add Expense</button> 
      </div>
    </form>
  );
};

export default ExpenseForm;
