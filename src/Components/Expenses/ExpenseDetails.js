

const ExpenseDetails=(props) =>{

  

  return (
    
      <div className="expense-item_description">
        <h2>{props.title}</h2>
        <div className="expense-item_price">Rs {props.amount}</div>
        <div className="Expense-location">{props.location}</div>
       
      </div>
      
    
  );
}
export default ExpenseDetails;
