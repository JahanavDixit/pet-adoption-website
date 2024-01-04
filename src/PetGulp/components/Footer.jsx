import React from "react";
import "../assets/css/Footer.css";
import payment from "../assets/images/payment.png";

const Footer = () => {
  return (
    <section className="footer" id="contact">
      <div className="footerCont">
        <div className="footerCont1">
          <a style={{ color: '#f081ba' }} href="#home" className="logo">
            Paws for a Cause
          </a>
          <p>
            if you have any query, please contact us at
            <span>hi@lamarr.tech</span>
          </p>
          <p>
            <i className="fa-solid fa-location-dot"></i> 23/6 Parkinson St, FL,
            USA
          </p>
          <p>
            <i className="fa-solid fa-phone"></i> +1234XX5789
          </p>

          <div className="contactIcons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-pinterest"></i>
          </div>
        </div>
      </div>
      <div className="cp">
        <p>
          &copy; 2023 Made by{" "}
          <a
            href="https://www.lamarr.tech"
            target="_blank"
            rel="noreferrer"
          >
            Lamarr
          </a>
        </p>

        <img src={payment} alt="" />
      </div>
    </section>
  );
};

export default Footer;
