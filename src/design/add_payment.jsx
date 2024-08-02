import React, { useState } from "react";
import { Component } from "react";
import "./additional.css";

let totalValue = 0;

const Add_payment = ({ open, onAddClick }) => {
  const [income, setIncome] = useState();
  const [expense, setExpense] = useState();
  const [total, setTotal] = useState(0);
  const handleIncomeChange = (e) => {
    const value = parseFloat(e.target.value) || "";
    setIncome(value);
  };
  const handleExpenseChange = (e) => {
    const value = parseFloat(e.target.value) || "";
    setExpense(value);
  };
  const add_total = () => {
    const newTotal = total + income;
    setTotal(newTotal);
    totalValue = newTotal;
    onAddClick();
  };
  const sub_total = () => {
    const newTotal = total - expense;
    setTotal(newTotal);
    totalValue = newTotal;
    onAddClick();
  };

  return open ? (
    <div className="container_1">
      <div className="income_expense">
        <div className="income">
          <p>Income</p>
          <input
            type="number"
            onChange={handleIncomeChange}
            value={income}
            placeholder="Enter Amount"
          />
          <input type="text" placeholder="Remarks" />
          <button className="add_payment" onClick={add_total}>
            Add
          </button>
        </div>
        <div className="expense">
          <p>Expense</p>
          <input
            type="number"
            onChange={handleExpenseChange}
            value={expense}
            placeholder="Enter Amount"
          />
          <input type="text" placeholder="Remarks" />
          <button className="add_payment" onClick={sub_total}>
            Add
          </button>
        </div>
      </div>
    </div>
  ) : null;
};
export { totalValue };
export default Add_payment;
