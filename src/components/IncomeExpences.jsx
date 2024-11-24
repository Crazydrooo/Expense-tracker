import { useContext } from "react";
import { TrackerContext } from "../store/ExpenseTrackerStore";
import styles from "./IncomeExpences.module.css";

const IncomeExpences = () => {
  const { transactions } = useContext(TrackerContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  return (
    <div className={styles.expense_main_container}>
      <div className={styles.expense_sub_container}>
        <div>
          <h4>INCOME</h4>
          <h5 className={styles.income_amt}>${income}</h5>
        </div>
        <div>
          <h4>EXPENSE</h4>
          <h5 className={styles.expence_amt}>${expense}</h5>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpences;
