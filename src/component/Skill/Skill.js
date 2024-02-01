import React from "react";
import "./Skill.css";
import frontend from "./fronend.png";
import backend from './backend.png'
import software from './software.png'

const Skill = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <br />
      <span className="skillDesc">
        I am a skilled and passionate web developer having good skills{" "}
      </span>
      <div className="skillBars">
     
        <div className="skillBar">
          <img className="skillBarImg" src={frontend} alt="Frontend Development" />
          <div className="skillBarText">
            <h2>Frontend Development</h2>
            <p>
              I have skills like HTML, CSS, JavaScript, and React.js for
              developing frontend design
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img className="skillBarImg" src={backend} alt="Frontend Development" />
          <div className="skillBarText">
            <h2>Backend Development</h2>
            <p>
              I have skills like NodeJS, ExpressJs, MongoDb for
              developing backend
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img className="skillBarImg" src={software} alt="Frontend Development" />
          <div className="skillBarText">
            <h2>Software Development</h2>
            <p>
              I have learnt programming languages like C, C++ for developing Software
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Skill;
