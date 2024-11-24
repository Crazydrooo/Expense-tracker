import { createContext, useContext, useReducer } from "react";
// import AppReducer from "./AppReducer";
const initialState = {
  transactions: [],
};

function AppReducer(state, action) {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id != action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
}

export const TrackerContext = createContext();

const ExpenseTrackerStore = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };
  return (
    <div>
      <TrackerContext.Provider
        value={{
          transactions: state.transactions,
          deleteTransaction,
          addTransaction,
        }}
      >
        {children}
      </TrackerContext.Provider>
    </div>
  );
};

export default ExpenseTrackerStore;
