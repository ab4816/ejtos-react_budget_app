import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {
  let ex = 0;
  let context = useContext(AppContext);
  context.expenses.forEach((element) => {
    ex += element.cost;
  });
  return (
    <div className="alert alert-primary">
      <span>Spent so far: ${ex}</span>
    </div>
  );
};

export default ExpenseTotal;
