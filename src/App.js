import React, { useState } from "react";
import './App.css';
import Routing from './Components/Routing/Routing';

function App() {

  const [cart, setCart] = useState([]);

  // ✅ ADD TO CART
  const addToCart = (product) => {
    setCart(prev => {

      const exist = prev.find(item => item.id === product.id);

      if (exist) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }

    });
  };

  // ✅ INCREASE
  const increaseQty = (id) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // ✅ DECREASE
  const decreaseQty = (id) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  return (
    <Routing 
      cart={cart}
      addToCart={addToCart}
      increaseQty={increaseQty}
      decreaseQty={decreaseQty}
    />
  );
}
export default App;