import React from "react";

const Total = ({ subTotal, tax, total }) => {
  return (
    <>
      <div className="result">Subtotal: {subTotal}</div>
      <div className="result">Tax: {tax.toFixed(2)}</div>
      <div className="result">Total: {total.toFixed(2)}</div>
    </>
  );
};

export default Total;
