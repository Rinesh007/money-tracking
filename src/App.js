import logo from "./logo.svg";
import "./design/App.css";
import wallet from "./assets/pngegg.png";
import React, { useEffect, useState } from "react";
import Add_payment from "./design/add_payment";
import { totalValue } from "./design/add_payment";

function App() {
  const [selectedValue, setSelectedValue] = useState("INR");
  const [sharedValue, setSharedValue] = useState(0.0);
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  const handleFunction = () => {
    setSharedValue(totalValue);
  };

  const handleOpen = () => {
    setCount((prevCount) => prevCount + 1);
    if (count % 2 == 0) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className="main">
      <div className="select-country">
        <label htmlFor="dropdown"> </label>
        <select
          id="dropdown"
          value={selectedValue}
          onChange={handleChange}
          className="select-country-dropdown"
        >
          <option value="AUD"> Australia (AUD)</option>
          <option value="BRL"> Brazil (BRL)</option>
          <option value="CAD"> Canada (CAD)</option>
          <option value="CNY"> China (CNY)</option>
          <option value="EUR"> Eurozone (EUR)</option>
          <option value="INR"> India (INR)</option>
          <option value="JPY"> Japan (JPY)</option>
          <option value="KRW"> South Korea (KRW)</option>
          <option value="MXN"> Mexico (MXN)</option>
          <option value="NPR"> Nepal (NPR)</option>
          <option value="RUB"> Russia (RUB)</option>
          <option value="SGD"> Singapore (SGD)</option>
          <option value="ZAR"> South Africa (ZAR)</option>
          <option value="CHF"> Switzerland (CHF)</option>
          <option value="USD"> United States (USD)</option>
          <option value="GBP"> United Kingdom (GBP)</option>
        </select>
      </div>
      <div className="container">
        <img className="wallet" src={wallet} />
        <h1>Expense Tracker</h1>
        <div className="edit_payment">
          <h2>
            Your Balance: {selectedValue} {sharedValue}
          </h2>
          <button
            className={`toggle-button ${open ? "active" : ""}`}
            onClick={handleOpen}
          >
            <span className="plus">+</span>
          </button>
        </div>
        <div className="add_payment">
          <Add_payment open={open} onAddClick={handleFunction} />
        </div>
      </div>
    </div>
  );
}

export default App;
