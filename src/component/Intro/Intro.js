import React, { useEffect } from "react";
import photo from "../../images/photo.png";
import Typed from 'typed.js';
import "./Intro.css"; // You can create a separate CSS file for better organization

const Intro = () => {
  useEffect(() => {
    const typed = new Typed(".typeText", {
      strings: ["Web Developer", "Software Engineer"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Shivam</span>
          <br /> 
          <span className="typeText"></span>
        </span>
        <p className="introPara">
          I am a skilled full stack web developer and software engineer with interest in <br/> creating webpages and software development
        </p>
      </div>
      <div>
      {/* <img src={photo} className="photo" alt="Shivam's Photo" /> */}
  </div>
    </section>
  );
};

export default Intro;
