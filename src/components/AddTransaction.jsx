import { TrackerContext } from "../store/ExpenseTrackerStore";
import styles from "./Addtransaction.module.css";
import { useContext, useState } from "react";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(TrackerContext);
  const onSubmit = (e) => {
    e.preventDefault();
    const newtransaction = {
      id: Math.floor(Math.random() * 10000000000),
      title: text,
      amount: +amount,
    };
    addTransaction(newtransaction);
    console.log(newtransaction);
    setAmount("");
    setText("");
  };
  return (
    <div className={styles.main_container}>
      <h3>Add New Transactions </h3>
      <hr />
      <form onSubmit={onSubmit}>
        <div className={styles.sub_container}>
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            placeholder="Enter Text...."
            onChange={(e) => setText(e.target.value)}
          />

          <label htmlFor="amount">
            Amount <br />
            (negative-expense,positive - income)
          </label>
          <input
            type="number"
            value={amount}
            placeholder="Enter amount...."
            onChange={(e) => setAmount(e.target.value)}
            className={styles.input_area}
          />
        </div>
        <button className={styles.btn}>Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
