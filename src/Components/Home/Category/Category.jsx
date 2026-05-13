import React, { useEffect, useState } from "react";
import "../Category/Style.css";

const Category = ({ addToCart, cart = [], increaseQty, decreaseQty }) => {

const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="shop">
      <div className="sidebar">
        <h3>Category</h3>
        <ul>
          <li>All Products</li>
          <li>Electronics</li>
          <li>Jewelery</li>
          <li>Men's Clothing</li>
          <li>Women's Clothing</li>
        </ul>
      </div>
      <div className="products">
        <div className="product-grid">

          {products.map((item) => {

            const cartItem = cart.find(c => c.id === item.id);

            return (
              <div className="card" key={item.id}>
                <img src={item.image} alt="" />
                <p>{item.title}</p>
                <h4>${item.price}</h4>

                {cartItem ? (
                  <div className="qty">
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{cartItem.quantity}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>
                ) : (
                  <button onClick={() => addToCart(item)}>
                    Add +
                  </button>
                )}

              </div>
            );
          })}

        </div>
      </div>

    </div>
  );
};

export default Category;