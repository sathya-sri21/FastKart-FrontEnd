import React, { useState } from 'react'
import NavBar from '../Components/Home/NavBar/NavBar'
import HomeBanner from '../Components/Home/HomeBanner/HomeBanner'
import Category from '../Components/Home/Category/Category'
import Popular from '../Components/Home/PopularProducts/Popular'
import Footer from '../Components/Home/Footer/Footer'

const HomePage = ({ cart, addToCart, increaseQty, decreaseQty }) => {

  // ✅ ADD THIS
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <NavBar 
        cart={cart}
        showCart={showCart}          
        setShowCart={setShowCart}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
      />

      <HomeBanner />

      <Category 
        addToCart={addToCart}
        cart={cart}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
      />

      <Popular />
      <Footer />
    </>
  )
}

export default HomePage;