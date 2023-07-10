
import React, { useState } from "react";
import ExpenseItem from "./Components/Expenses/ExpenseItem";
import NewExpenses from "./NewExpense/NewExpenses";
import ExpensesFilter from "./Components/Expenses/ExpensesFilter";
import ExpenseChart from "./Components/Expenses/ExpenseChart";

const Dummyexpense = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 2000,
    date: new Date(2023, 7, 6),
    location: "Kadodara",
  },
  {
    id: "e2",
    title: "T.V",
    amount: 10000,
    date: new Date(2022, 7, 6),
    location: "Gangadhara",
  },
  {
    id: "e3",
    title: "Mobile",
    amount: 15000,
    date: new Date(2020, 7, 7),
    location: "Surat",
  },
  {
    id: "e4",
    title: "Watch",
    amount: 1500,
    date: new Date(2019, 7, 8),
    location: "Sachin",
  },
  {
    id: "e5",
    title: "Bike",
    amount: 1500,
    date: new Date(2022, 7, 8),
    location: "Kadodra",
  },
];

function App(props) {
  const [expenses, setExpenses] = useState(Dummyexpense);
  const addExpenseHandler = (expenseData) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expenseData];
    });
  };

  const [filteredYear, setFilteredYear] = useState('2023');

  const handleFilterChange = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
let ExpenseContent= <p>No expense data.</p>;
if(filteredExpenses.length>0){
 ExpenseContent= filteredExpenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
      location={expense.location}
    />
  ))
}


  return (
    <div className="App">
    <NewExpenses onAddExpense={addExpenseHandler} />
    <ExpensesFilter selected={filteredYear} onChangeFilter={handleFilterChange} />
    <ExpenseChart expenses={filteredExpenses}/>
    {ExpenseContent}
      
  </div>
)
  }
export default App;




