import React from "react";
import { image } from "../data/user";
import "./About.css"; //

function About() {
  return (
    <div id="about" className="about-container">
      <h2 className="about-title">Meet the Creator</h2>
      <p className="about-message">Hey there! I'm the creative mind behind this masterpiece.</p>
      <div className="about-image-container">
        <img src={image} alt="I made this" className="about-image" />
      </div>
    </div>
  );
}

export default About;
