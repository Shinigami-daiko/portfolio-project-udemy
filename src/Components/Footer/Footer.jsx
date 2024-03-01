import React from "react";
import logo from "../../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer-copywrite">
          <p>© 2023 Itor Kennedy. All Rights Reserved</p>
        </div>
        {/*social media*/}
        <ul className="footer-social-media">
          <li>
            <a href="www.youtube.com" target="_blank">
              ✈️
            </a>
          </li>
          <li>
            <a href="www.youtube.com" target="_blank">
              ⭐
            </a>
          </li>
          <li>
            <a href="www.youtube.com" target="_blank">
              🌟
            </a>
          </li>
          <li>
            <a href="www.youtube.com" target="_blank">
              🔯
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
