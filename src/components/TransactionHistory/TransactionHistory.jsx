import React from 'react';
import style from '../TransactionHistory/transactionHistory.module.css';
import PropTypes from 'prop-types';


const TransactionHistory = ({items}) => {

  const itemTransaction = items.map(({ id, type, amount, currency }, index) => {

    const colorLine = [`${style.tableBody}`];
    if (index % 2 !== 0) {
      colorLine.push(`${style.add}`);
    }
    return (
    <tr key={id} className={colorLine.join(' ')}>
      <td className={style.tdI}>{type}</td>
      <td className={style.td}>{amount}</td>
      <td className={style.td}>{currency}</td>     
    </tr>
    )
  });

    return (
      <table className={style.table}>
          <thead className={style.head}>
            <tr>
              <th className={style.th}>Type</th>
              <th className={style.th}>Amount</th>
              <th className={style.th}>Currency</th>
            </tr>
          </thead>
          <tbody className={style.tbody}>{itemTransaction}</tbody>
      </table>
    )
    }

    TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        type: PropTypes.string,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
    })),
     
  };



    export default TransactionHistory;