import React, { useState } from "react";

const DiscountPopUp = ({ applyDiscount }) => {
  const [discountText, setDiscountText] = useState("");
  return (
    <div className="modal">
      <div className="modal-content">
        <input
          type="text"
          name="code"
          placeholder="enter your code here"
          onChange={(e) => setDiscountText((current) => e.target.value)}
        />
        <button id="enter-code" onClick={() => applyDiscount(discountText)}>
          enter
        </button>
      </div>
    </div>
  );
};

export default DiscountPopUp;
