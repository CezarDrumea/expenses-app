import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Car',
    amount: 5000.0,
    date: new Date(2020, 5, 30),
  },
  {
    id: 'e2',
    title: 'Books',
    amount: 200.0,
    date: new Date(2020, 6, 1),
  },
  {
    id: 'e3',
    title: 'College',
    amount: 1000.0,
    date: new Date(2021, 7, 1),
  },
  {
    id: 'e4',
    title: 'Udemy',
    amount: 50.0,
    date: new Date(2022, 4, 7),
  },
  {
    id: 'e5',
    title: 'Food',
    amount: 10.0,
    date: new Date(2023, 3, 2),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const handleAddExpense = expense => {
    setExpenses(prevExpenses => [expense, ...prevExpenses])
    console.log(expense.date);
  }

  return (
    <div>
      <NewExpense onAddExpense={handleAddExpense}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
