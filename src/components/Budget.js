import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
const Budget = () => {
  const { budget, remaining, dispatch, currency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const handleBudgetChange = (event) => {
    let newAmt = parseInt(event.target.value);

    if (newAmt < budget - remaining) {
      alert("You cannot reduce the budget value lower than the spending");
      return;
    }
    if (newAmt > 20000) {
      alert("Your budget cannot exceed " + currency + " 20000");
      return;
    }
    dispatch({
      type: "SET_BUDGET",
      payload: newAmt,
    });
    setNewBudget(newAmt);
  };
  return (
    <div className="alert alert-secondary" style={{ height: "58px" }}>
      <span>Budget: {currency}</span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      />
    </div>
  );
};
export default Budget;
