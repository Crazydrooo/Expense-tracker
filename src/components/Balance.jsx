import { useContext } from "react";
import styles from "./Balance.module.css";
import { TrackerContext } from "../store/ExpenseTrackerStore";

const Balance = () => {
  const { transactions } = useContext(TrackerContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  console.log(amounts);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div className={styles.balance_container}>
      <h4>YOUR BALANCE</h4>
      <h1>${total}</h1>
    </div>
  );
};

export default Balance;
