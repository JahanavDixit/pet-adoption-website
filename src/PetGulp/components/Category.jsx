import React from "react";
import "../assets/css/Category.css";
import { category2 } from "../data";

const Category = () => {
  return (
    <section className="category" id="collections">
      <h1 className="sectionHeader">
        <span>Services</span>
      </h1>
      <div className="categoryCont2">
        {category2.map((cat2) => (
          <div className="cat2Box" key={Math.random()}>
            <img src={cat2.pic} alt="" />
            <div className="cat2BoxContent">
              <p>{cat2.subtitle}</p>
              <h2>
                {cat2.title} <span>{` ${cat2.titleSpan}`}</span>
              </h2>
              <button className="primBtn">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
