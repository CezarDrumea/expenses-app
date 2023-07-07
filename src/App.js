import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Car Insurace',
      amount: 300.0,
      date: new Date(2023, 5, 30),
    },
    {
      id: 'e2',
      title: 'Books',
      amount: 200.0,
      date: new Date(2023, 6, 1),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
