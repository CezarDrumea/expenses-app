import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseData }) => {
  const emptyInput = {
    title: '',
    amount: '',
    date: '',
  };

  const [userInput, setUserInput] = useState(emptyInput);

  const handleInputValueChange = (field) => (event) => {
    setUserInput((prevState) => ({
      ...prevState,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const expenseData = {
      ...userInput,
      date: new Date(userInput.date),
    };

    onSaveExpenseData(expenseData)

    setUserInput(emptyInput);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            onChange={handleInputValueChange('title')}
            value={userInput.title}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={handleInputValueChange('amount')}
            value={userInput.amount}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2023-12-31'
            onChange={handleInputValueChange('date')}
            value={userInput.date}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
