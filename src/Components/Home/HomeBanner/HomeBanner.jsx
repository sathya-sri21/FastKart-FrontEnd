import React from 'react'
import banner from '../../../Assets/banner.jpg';
import '../HomeBanner/Style.css'

const HomeBanner = () => {
  return (
         <div className="Banner">
  <img src={banner} alt="banner" />

  <div className="Content">
    <div className="con">
      <h4>Exclusive offer</h4>
      <span className="off">30% Off</span>
    </div>

    <div className="con1">
      <h1>
        Stay home & delivered <br />
        your <span className="green ">Daily Needs</span>
      </h1>
    </div>

    <div className="con2">
      <h5>
        Vegetables contain many vitamins and minerals that are good for your health.
      </h5>
    </div>

    <div className="Button">
      <h3>Shop Now</h3>
    </div>
  </div>
</div>
  )
}

export default HomeBanner
