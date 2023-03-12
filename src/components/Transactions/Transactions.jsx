import PropTypes from 'prop-types';
import css from './Transactions.module.css';

export const TransactionHistory = ({ items }) => {
    return (
      <table className={css.transactionHistory}>
        <thead>
          <tr className={css.trHead}>
            <th className={css.thCell}>Type</th>
            <th className={css.thCell}>Amount</th>
            <th className={css.thCell}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr className={css.trRow}key={item.id}>
              <td className ={css.tdCell}>{item.type}</td>
              <td className={css.tdCell}>{item.amount}</td>
              <td className={css.tdCell}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ),
  };