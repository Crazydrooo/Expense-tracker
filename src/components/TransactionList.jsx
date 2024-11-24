import { useContext, useState } from "react";
import styles from "./TransactionList.module.css";
import { TrackerContext } from "../store/ExpenseTrackerStore";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(TrackerContext);
  console.log(transactions);
  return (
    <div className={styles.transaction_list_container}>
      <h4>History</h4>
      <hr />
      <ul className={styles.list}>
        {transactions.map((transaction, index) => (
          <Transaction
            key={transaction.id}
            transaction={transaction}
          ></Transaction>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
