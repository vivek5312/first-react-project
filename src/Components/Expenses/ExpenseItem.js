//import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";




import "./Expense.css";

const ExpenseItem = (props) => {
  



/*   const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount); */
  
  
  /* const ClickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };

  const ChangeExpense = () => {
    setAmount(100);
  }; */


 
  return (
    <div className="Expense-item">
    
  
      <ExpenseDate date={props.date} />
      <ExpenseDetails amount={props.amount} /* location={props.location}*/ title={props.title} />
     {/*  <button className="change-Title">
        Change Title
      </button>
      <button className="delbtn" >
        Change-Expense
      </button> */}
    </div>
  );
};
export default ExpenseItem;