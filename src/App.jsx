import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpences from "./components/IncomeExpences";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import ExpenseTrackerStore from "./store/ExpenseTrackerStore";

function App() {
  return (
    <>
      <ExpenseTrackerStore>
        <div className="main_container">
          <Header></Header>
          <div className="balance_container">
            <Balance></Balance>
            <IncomeExpences></IncomeExpences>
            <TransactionList></TransactionList>
            <AddTransaction></AddTransaction>
          </div>
        </div>
      </ExpenseTrackerStore>
    </>
  );
}

export default App;
