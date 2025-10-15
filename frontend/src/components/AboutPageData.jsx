import React from "react";

const AboutPageData= ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
           At ZeeCare, we are committed to delivering compassionate, patient-centered 
           care backed by advanced medical expertise and modern technology. 
           Our team of dedicated healthcare professionals strives to provide 
           the highest standards of treatment, preventive care, and wellness 
           support to ensure a healthier, happier community. With excellence, 
           integrity, and innovation at our core, ZeeCare stands as your reliable 
           partner in every step of your healthcare journey.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default AboutPageData;
