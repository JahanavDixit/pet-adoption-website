import React from "react";
import "../assets/css/Service.css";
import serviceImg from "../assets/images/service-image.png";

const Service = () => {
  return (
    <section className="service" id='service'>
      <img src={serviceImg} className="serviceImage" alt="" />

      <h1 className="sectionHeader">
        <span>About Paws for a Cause</span> 
      </h1>

      <div className="serviceContainer">
      At Paws for a Cause, we embrace innovation to bring about positive change. Our Stray Tracking program employs Computer Vision technology to locate and keep tabs on homeless animals in need. <br/>We utilize a network of mobile phones and dashcams, two gadgets that most of us carry in our daily lives, to create a vigilant eye over the stray animals that roam our streets.
      </div>
    </section>
  );
};

export default Service;
