import React from "react";
import './About.css';

const About = () => {
  return (
    <div className="text-center  about">
      <div className="gradient text-white">
        <p>OWNly, an Own and Share</p>
        <p>Copyright NFT Platform</p>
      </div>
      <div>
        <p className="about_text">
          You can choose to place a price on everything you own in the digital
          world and share the copyright.
        </p>
        <br/>
      </div>
      <button className="launch_app"><b>Launch App</b></button>
    </div>
  );
};

export default About;
