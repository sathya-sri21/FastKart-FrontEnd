import React from "react";
import "../Footer/Footer.css"
import logo from "../../../Assets/logo.png"

const Footer = () => {
  return (
    <div className="footer">

          <div className="footer-top">
              <div>
                  <img src={logo} alt="logo" />     
                  <p>Fresh groceries delivered to your door.</p>
              </div>
        <div>
          <h4>Home</h4>
          <p>About Us</p>
          <p>Contact</p>
        </div>
        <div>
          <h4>Help</h4>
          <p>FAQs</p>
          <p>Support</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 FastKart. All rights reserved.</p>
      </div>

    </div>
  );
};

export default Footer;