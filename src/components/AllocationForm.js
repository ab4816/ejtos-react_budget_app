import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const AllocationForm = (props) => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState(0);
  const [action, setAction] = useState("Add");

  const submitEvent = () => {
    const temp = { cost: parseInt(cost), name: name };
    switch (action) {
      case "Add":
        dispatch({
          type: "ADD_EXPENSE",
          payload: temp,
        });
        break;
      case "Reduce":
        dispatch({
          type: "RED_EXPENSE",
          payload: temp,
        });
        break;
      default:
    }
  };

  return (
    <div>
      <div className="row">
        <div className="input-group mb-3" style={{ marginLeft: "2rem" }}>
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Department
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect01"
            onChange={(e) => setName(e.target.value)}
          >
            <option defaultValue>Choose...</option>
            <option value="Marketing" name="marketing">
              Marketing
            </option>
            <option value="Sales" name="sales">
              Sales
            </option>
            <option value="Finance" name="finance">
              Finance
            </option>
            <option value="HR" name="hr">
              HR
            </option>
            <option value="IT" name="it">
              IT
            </option>
            <option value="Admin" name="admin">
              Admin
            </option>
          </select>
          <div className="input-group-prepend" style={{ marginLeft: "2rem" }}>
            <label className="input-group-text" htmlFor="inputGroupSelect02">
              Allocation
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect02"
            onChange={(e) => setAction(e.target.value)}
          >
            <option defaultValue value="Add" name="Add">
              Add
            </option>
            <option value="Reduce" name="Reduce">
              Reduce
            </option>
          </select>
          <input
            required="required"
            type="number"
            id="cost"
            step="10"
            value={cost}
            style={{ marginLeft: "2rem", size: 10 }}
            onChange={(e) => setCost(e.target.value)}
          />
          <button
            className="btn btn-primary"
            style={{ marginLeft: "2rem" }}
            onClick={submitEvent}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllocationForm;
