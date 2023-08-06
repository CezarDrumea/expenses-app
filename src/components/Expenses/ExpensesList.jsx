import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = ({ items }) => {
  return (
    <>
      {items.length === 0 && <h2 className='expenses-list__fallback'>Found no expenses.</h2>}
      <ul className='expenses-list'>
        {items.map((expense) => (
          <ExpenseItem {...expense} key={expense.id} />
        ))}
      </ul>
    </>
  );
};
export default ExpensesList;
