import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            At ZeeCare Medical Institute, we are committed to redefining 
            healthcare through innovation and technology. Founded in 2024, 
            our mission is to create a seamless connection between patients 
            and healthcare professionals. Built on the MERN Stack, our platform 
            simplifies the process of booking doctor appointments, accessing 
            medical information, and managing healthcare needs efficiently and 
            securely.
          </p>
          <p>We are all in 2025</p>
          <p>
            With a focus on trust, transparency, and accessibility, 
            we aim to make quality healthcare available to everyone, 
            anytime, anywhere. At ZeeCare, we combine technology, compassion, 
            and care to build a healthier and more connected future.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
