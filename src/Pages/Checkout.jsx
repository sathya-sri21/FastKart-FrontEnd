import React from "react";
import { useLocation } from "react-router-dom";
import "./Checkout.css";

const CheckoutPage = () => {
  const location = useLocation();

  const cart = location.state?.cart || [];

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="checkout-container">

      <h2 className="checkout-title">Checkout Page</h2>

      {cart.length === 0 ? (
        <p className="empty-text">No items found</p>
      ) : (
        cart.map((item) => (
          <div className="checkout-item" key={item.id}>
            <p>{item.title}</p>
            <p>
              {item.quantity} × ${item.price}
            </p>
          </div>
        ))
      )}

      <h3 className="checkout-total">
        Total: ${total.toFixed(2)}
      </h3>
    <div className="ButtonPl">
      <button className="place-order-btn">
        Place Order
      </button>
      </div>
      

    </div>
  );
};

export default CheckoutPage;