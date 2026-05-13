import React from "react";
import "./Style.css";
import logo from "../../../Assets/logo.png";
import Cart from "../../Cart/Cart";
import { FaShoppingCart } from "react-icons/fa";


const NavBar = ({ cart = [], showCart, setShowCart, increaseQty, decreaseQty }) => {

  const totalItems = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <>
      <div className="navbar">
        
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>



        <div className="search-bar">
          <input type="text" placeholder="I'm searching for..." />
          <button>🔍</button>
        </div>

        <div className="nav-right">

          <div className="contact">
            📞
            <div>
              <p>24/7 Delivery</p>
              <span>+91 888 104 2340</span>
            </div>
          </div>


          {/* 🛒 CART */}
          <div 
            className="cart"
            onClick={() => setShowCart(!showCart)}
          >
             <FaShoppingCart />
            
            <span className="badge">{totalItems}</span>
          </div>


        </div>
      </div>

      {showCart && (
        <Cart 
          cart={cart}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
        />
      )}
    </>
  );
};

export default NavBar;