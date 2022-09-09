import React, { useState } from "react";

const Checkout = ({ getSubtotal }) => {
  const [pantsQuantity, setPantsQuantity] = useState(0);
  const [shirtQuantity, setShirtQuantity] = useState(0);

  const unitPantsPrice = 40.99;
  const unitShirtPrice = 10.99;
  const shirtTotal = (unitPantsPrice * pantsQuantity).toFixed(2);
  const pantsTotal = (unitShirtPrice * shirtQuantity).toFixed(2);

  const incrementPantsQuantity = () =>
    setPantsQuantity((current) => current + 1);
  const decrementPantsQuantity = () => {
    if (pantsQuantity > 0) setPantsQuantity((current) => current - 1);
  };

  const incrementShirtQuantity = () =>
    setShirtQuantity((current) => current + 1);
  const decrementShirtQuantity = () => {
    if (shirtQuantity > 0) setShirtQuantity((current) => current - 1);
  };

  return (
    <>
      <div className="checkout">
        <div>
          <h2>Product</h2>
          <span>Pants</span>
          <span>Shirt</span>
        </div>
        <div>
          <h2>Quantity</h2>
          <div id="pants-quantity">
            <button onClick={decrementPantsQuantity}>-</button>{" "}
            <span>{pantsQuantity}</span>{" "}
            <button onClick={incrementPantsQuantity}>+</button>
          </div>
          <div id="shirt-quantity">
            <button onClick={decrementShirtQuantity}>-</button>{" "}
            <span>{shirtQuantity}</span>{" "}
            <button onClick={incrementShirtQuantity}>+</button>
          </div>
        </div>
        <div>
          <h2>Unit Price</h2>
          <span>${unitPantsPrice}</span>
          <span>${unitShirtPrice}</span>
        </div>
        <div>
          <h2>Extended Price</h2>
          <span id="pants-price">${shirtTotal}</span>
          <span id="shirt-price">${pantsTotal}</span>
        </div>
      </div>
      <button
        id="calculate"
        onClick={() => getSubtotal(shirtTotal, pantsTotal)}
      >
        Calculate
      </button>
    </>
  );
};

export default Checkout;
