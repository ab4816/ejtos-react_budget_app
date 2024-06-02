import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { AppContext } from "../context/AppContext";
const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);
  const expense = {
    name: props.name,
    cost: 10,
  };

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };
  const increaseAllocation = (name) => {
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };
  const decreaseAllocation = () => {
    dispatch({
      type: "RED_EXPENSE",
      payload: expense,
    });
  };
  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency}
        {props.cost}
      </td>
      <td>
        <FaPlusCircle
          color="green"
          size={"1.8rem"}
          onClick={increaseAllocation}
        />
      </td>
      <td>
        <FaMinusCircle
          color="darkred"
          size={"1.8rem"}
          onClick={decreaseAllocation}
        />
      </td>
      <td>
        <TiDelete color="black" size="1.6em" onClick={handleDeleteExpense} />
      </td>
    </tr>
  );
};
export default ExpenseItem;
