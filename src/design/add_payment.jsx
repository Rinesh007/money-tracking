import React from "react";
import { Component } from "react";
import "./additional.css";
const Add_payment = ({ open }) => {
  return open ? (
    <div className="container_1">
      <div className="income_expense">
        <div className="income">
          <p>Income</p>
          <input type="number" placeholder="Enter Amount" />
          <input type="text" placeholder="Add note" />
        </div>
        <div className="expense">
          <p>Expense</p>
          <input type="number" placeholder="Enter Amount" />
          <input type="text" placeholder="Add note" />
        </div>
      </div>
    </div>
  ) : (
    console.log(false)
  );
};

export default Add_payment;
