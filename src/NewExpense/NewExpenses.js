import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";
const NewExpenses=(props)=>{
   const saveExpenseData=(eneteredExpenseData)=>{
    const expenseData={
        ...eneteredExpenseData,
        id:Math.random().toString()
    };
    props.onAddExpense(expenseData);
   }
    return (
        <div className="new-expense"> 
            <ExpenseForm  onSaveExpenseData={saveExpenseData}/>
        </div>
    )
}
export default NewExpenses;