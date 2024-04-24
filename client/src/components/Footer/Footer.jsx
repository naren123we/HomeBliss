import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={190} />
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">
            2/373 B, Nawanganj, Kanpur 208002
          </span>
          <div className="flexCenter f-menu">
            <Link to="/">
              {" "}
              <span>Home</span>
            </Link>
            <Link to="/properties">
              <span>Property</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
