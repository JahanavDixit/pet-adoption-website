import React from "react";
import "./PetGulp.css";
// import BestSeller from "./components/BestSeller";
import Brands from "./components/Brands";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Service from "./components/Service";

const PetGulp = () => {
  return (
    <>
      <Header />
      <Hero />
      <Service />
      <CTA />
      <Brands />
      <Footer />
    </>
  );
};

export default PetGulp;
