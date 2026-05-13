import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import CheckoutPage from '../../Pages/Checkout';
import HomePage from '../../Pages/HomePage';

const Routing = ({ cart, addToCart, increaseQty, decreaseQty }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path='/' 
          element={
            <HomePage 
              cart={cart}
              addToCart={addToCart}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
            />
          } 
        />
         <Route path='/checkout' element={<CheckoutPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default Routing
