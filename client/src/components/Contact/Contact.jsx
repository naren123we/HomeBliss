import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">About us</span>
          <span className="primaryText">Discover who we are</span>
          <br />
          <span className="secondaryText">
            Welcome to HomeBliss, your premier destination for exceptional real
            estate management services.{" "}
          </span>

          <span className="secondaryText">
            At HomeBliss, we understand that managing real estate can be complex
            and demanding. That's why we're here to simplify the process for
            you. With years of experience and a dedicated team of experts, we
            specialize in providing comprehensive management solutions tailored
            to meet your unique needs.
          </span>
          <br />
          <span className="secondaryText">
            From residential properties to commercial spaces, our goal is to
            maximize the value of your investments while minimizing the stress
            of ownership.
          </span>

          <div className="flexColStart contactModes"></div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img
              src="https://images.pexels.com/photos/7078907/pexels-photo-7078907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
