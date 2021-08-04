import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
    setIsEditing(false);
};

const [isEditing, setIsEditing] = useState(false);
const startEditingHandler = () =>{
  setIsEditing(true);
}

const cancelEditing = () =>{
  setIsEditing(false);
}

  return (
    <div className="new-expense">{!isEditing &&
    <button onClick={startEditingHandler}>Add new expense</button>}
    {isEditing &&
      <ExpenseForm onSaveExpenseData= {saveExpenseData} onCancel = {cancelEditing} />}
    </div>
  );
};

export default NewExpense;
