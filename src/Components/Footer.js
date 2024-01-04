import React from "react";
import "./Footer.css"; 
import log1 from './assests/whatsapp.png';
import log2 from './assests/instagram.png';
import log3 from './assests/twitter.png';

const Footer = () => {
  return (
    <footer>

      <div className="footer-container">

        <div className="footer-section">
          <h3>
          <p><a href="#"  style={{color:"white" , textDecoration:"none"}}>Terms and Conditions</a></p>
          <p><a href="#"  style={{color:"white" , textDecoration:"none"}}>Privacy Settings</a></p>
          </h3>
        </div>

        <div className="footer-section">
          <h3>Contact Us </h3>
          <p>Email: <a href="#"  style={{color:"white" , textDecoration:"none"}}>727822tuit036@gmail.com</a></p>
          <p>Phone: +91 9687578565</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul id="ul">
            <li id="li"><a href="#" style={{color:"white" , textDecoration:"none"}}>Flights</a></li>
            <li id="li"><a href="#"style={{color:"white" , textDecoration:"none"}}>Hotels</a></li>
            <li id="li"><a href="#"style={{color:"white" , textDecoration:"none"}}>Destinations</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <a href="#" id="icon">
          <img src={log1} alt='' style={{height:'35px'}}></img>
          </a>
          <a href="#" id="icon">
          <img src={log2} alt='' style={{height:'35px'}}></img>
          </a>
          <a href="#"id="icon">
          <img src={log3} alt='' style={{height:'35px'}}></img>
          </a>
          <br/>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 FlyWithUs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;