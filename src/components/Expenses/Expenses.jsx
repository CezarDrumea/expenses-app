import { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesList from './ExpensesList';

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const handleFilterExpenses = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = expenses.filter(
    (filteredExpense) => filteredExpense.date.getFullYear() === +filteredYear
  );
  return (
    <Card className='expenses'>
      <ExpensesFilter
        selectedYear={filteredYear}
        onFilter={handleFilterExpenses}
      />
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
};
export default Expenses;
