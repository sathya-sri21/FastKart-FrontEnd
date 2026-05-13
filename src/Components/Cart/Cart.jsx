import React from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart = [], increaseQty, decreaseQty }) => {

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
    const navigate = useNavigate();
  return (
    <div className="cart-popup">

      <h3>My Cart</h3>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>

              <img src={item.image} alt="" />

              <div className="cart-details">
                <p>{item.title}</p>

                {/* + / - */}
                <div className="qty">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                <h5>${item.price}</h5>
              </div>

            </div>
          ))}

          {/* TOTAL */}
          <h3>Total: ${totalPrice.toFixed(2)}</h3>

          {/* CHECKOUT */}
          <button
  className="checkout-btn"
  onClick={() => navigate("/checkout", { state: { cart } })}
>
  Checkout
</button>
        </>
      )}

    </div>
  );
};

export default Cart;