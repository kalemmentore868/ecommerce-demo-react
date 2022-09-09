import { useState } from "react";
import Checkout from "./components/Checkout";
import Total from "./components/Total";
import DiscountPopUp from "./components/DiscountPopUp";

function App() {
  const [subTotal, setSubTotal] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [noTax, setNoTax] = useState(false);
  const tax = subTotal * 0.13;
  const total = noTax ? subTotal : subTotal + tax;

  const getSubtotal = (shirtTotal, pantsTotal) => {
    setSubTotal((current) => parseFloat(shirtTotal) + parseFloat(pantsTotal));
  };

  const showDiscountModal = () => {
    if (subTotal > 0) setShowModal(true);
  };

  const applyDiscount = (discountText) => {
    if (discountText === "FIFTYFIFTY") setSubTotal((current) => current / 2);
    if (discountText === "NOTAX") setNoTax(true);
    setShowModal(false);
  };
  return (
    <>
      <h1>E-commerce Website</h1>
      <Checkout getSubtotal={getSubtotal} />
      <Total subTotal={subTotal} tax={tax} total={total} />

      <div>
        Have a promo code?{" "}
        <button id="promo-code" onClick={showDiscountModal}>
          Click to Enter
        </button>
      </div>

      {showModal && <DiscountPopUp applyDiscount={applyDiscount} />}
    </>
  );
}

export default App;
