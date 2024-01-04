import React from "react";
import "../assets/css/CTA.css";
import banner from "../assets/images/cta-banner.png";

const CTA = () => {
  return (
    <section className="cta" id='cta'>
      <div className="ctaCat">
        <img src={banner} alt="" />
      </div>
      <div className="ctaContent">
        <h2>Why to Adopt ?</h2>
        <p>
        Every stray animal has a story, and by choosing to adopt, you are changing their sad story to a happier one. Adoption is not just about providing a roof and meals; it's about giving a second chance at life to a loyal companion. When you adopt, you're not only gaining a best friend – you're also making room for another rescue, thereby contributing to a much bigger picture of love, compassion, and change.
        </p>
      </div>
    </section>
  );
};

export default CTA;
