import React from "react";
import Typical from "react-typical";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import profileimg from "../../assets/profileimg.png";
import "../Header/Header.css";

const Header = () => {
  return (
    <div className="header-container">
      {/*header content*/}
      <div className="header-content">
        <h1>Hi i'm</h1>
        <h2 className="fullname"> Kennedy Itor</h2>
        <h2>
          I'm a
          <Typical
            steps={[
              " Full Stack Developer 💜",
              100,
              " Frontend Developer ✔️",
              1000,
              " Backend Developer 💪",
              1000,
              " React Developer 👑",
              1000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          saepe, officia porro, nisi accusantium fuga nostrum molestiae deserunt
          reiciendis, tempore dicta in mollitia aliquid cumque omnis eaque
          obcaecati suscipit magnam.
        </p>
        {/* payment links*/}
        <div className="header-payment-container">
          <button>Hire Me</button>
          <FontAwesomeIcon icon="fa-brands fa-paypal" />
          <FontAwesomeIcon icon="fa-brands fa-cc-mastercard" />
          <FontAwesomeIcon icon="fa-brands fa-cc-visa" />
        </div>
      </div>
      <div className="profile-img-container">
        <img src={profileimg} alt="profile image" />
        <div className="circle-1"> </div>
        <div className="circle-2"> </div>
      </div>
    </div>
  );
};

export default Header;
