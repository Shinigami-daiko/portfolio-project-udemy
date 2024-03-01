import React from "react";
import "../Services/Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-list-container">
        {/*desc */}
        <div className="services-description-container">
          <h1>
            My Awesome <span>Services</span>
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            repellendus accusamus ut cupiditate, nostrum corporis tempora.
            Facere nihil velit, non iusto sit unde eius aspernatur reprehenderit
            quibusdam maiores expedita explicabo!
          </p>
          <button>Hire Me</button>
        </div>
        {/*item*/}
        <div className="service-item-container">
          <div className="services-item">
            <i className="fa-solid fa-code"></i>
            <div className="item-desc">
              <h3>Web development </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto reprehenderit id inventore fuga earum amet quis animi
                repudiandae incidunt modi quaerat, mollitia beatae suscipit
                facere facilis velit. Corrupti, veritatis laborum!
              </p>
            </div>
          </div>
          <div className="services-item">
            <i className="fa-solid fa-desktop"></i>
            <div className="item-desc">
              <h3>Desktop development </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto reprehenderit id inventore fuga earum amet quis animi
                repudiandae incidunt modi quaerat, mollitia beatae suscipit
                facere facilis velit. Corrupti, veritatis laborum!
              </p>
            </div>
          </div>
          <div className="services-item">
            <i className="fa-solid fa-tablet-alt"></i>
            <div className="item-desc">
              <h3>U/X design </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto reprehenderit id inventore fuga earum amet quis animi
                repudiandae incidunt modi quaerat, mollitia beatae suscipit
                facere facilis velit. Corrupti, veritatis laborum!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
