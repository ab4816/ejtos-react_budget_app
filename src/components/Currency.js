import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { dispatch, currency } = useContext(AppContext);
  const handleCur = (e) => {
    let temp = "";
    switch (e.target.value) {
      case "1":
        temp = "$";
        break;
      case "2":
        temp = "£";
        break;
      case "3":
        temp = "€";
        break;
      case "4":
        temp = "₹";
        break;
      default:
        break;
    }
    dispatch({
      type: "CHG_CURRENCY",
      payload: temp,
    });
  };

  return (
    <select
      value={currency}
      name="currency"
      id="currencySelector"
      style={{
        backgroundColor: "#93d499",
        color: "white",
        height: "57px",
        width: "100%",
        border: "1px solid green",
        borderRadius: "5px",
        padding: "1rem",
      }}
      onChange={handleCur}
    >
      <option
        value="$"
        label="Currency ($ Dollar)"
        style={{ display: "none" }}
      />
      <option
        defaultValue
        value="£"
        label="Currency (£ Pound)"
        style={{ display: "none" }}
      />
      <option
        defaultValue
        value="€"
        label="Currency (€ Euro)"
        style={{ display: "none" }}
      />
      <option
        defaultValue
        value="₹"
        label="Currency (₹ Ruppee)"
        style={{ display: "none" }}
      />
      <option value="1" label="$ Dollar" style={{ color: "black" }} />
      <option value="2" label="£ Pound" style={{ color: "black" }} />
      <option value="3" label="€ Euro" style={{ color: "black" }} />
      <option value="4" label="₹ Ruppee" style={{ color: "black" }} />
    </select>
  );
};

export default Currency;
