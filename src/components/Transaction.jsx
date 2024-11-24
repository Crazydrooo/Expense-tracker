import { useContext, useState } from "react";
import styles from "./TransactionList.module.css";
import { TrackerContext } from "../store/ExpenseTrackerStore";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(TrackerContext);
  const [isTrue, setTrue] = useState(false);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li
      className={`${styles.item} ${transaction.amount < 0 ? "minus" : "plus"}`}
      //   className={`${styles.moduleClass} regular-class`}
      onMouseOver={() => setTrue(true)}
      onMouseOut={() => setTrue(false)}
      key={transaction.id}
    >
      <div className={styles.item_content}>
        {transaction.title}{" "}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
      </div>{" "}
      <div>
        {isTrue ? (
          <button
            className={styles.remove_button}
            onClick={() => deleteTransaction(transaction.id)}
          >
            x
          </button>
        ) : null}
      </div>
    </li>
  );
};

export default Transaction;
