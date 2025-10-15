import React from "react";
import AboutPageData from "../components/AboutPageData";
import Biography from "../components/Biography";
const AboutUs = () => {
  return (
    <>
      <AboutPageData
        title={"Learn More About Us | ZeeCare Medical Institute"}
        imageUrl={"/about.png"}
      />
      <Biography imageUrl={"/whoweare.png"} />
    </>
  );
};

export default AboutUs;
