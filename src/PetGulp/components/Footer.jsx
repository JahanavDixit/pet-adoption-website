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
