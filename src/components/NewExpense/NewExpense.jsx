import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
  const [formShown, setFormShown] = useState(false);

  const handleFormShown = (value) => () => {
    setFormShown(value);
  };

  const handleSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      {formShown === false ? (
        <button onClick={handleFormShown(true)}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={handleSaveExpenseData}
          onCancel={handleFormShown(false)}
        />
      )}
    </div>
  );
};
export default NewExpense;
