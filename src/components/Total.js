import React from "react";

const Total = ({ subTotal, tax, total }) => {
  if (typeof subTotal === "number") subTotal = subTotal.toFixed(2);
  return (
    <>
      <div className="result">Subtotal: {subTotal}</div>
      <div className="result">Tax: {tax.toFixed(2)}</div>
      <div className="result">Total: {total.toFixed(2)}</div>
    </>
  );
};

export default Total;
