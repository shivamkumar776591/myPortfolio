import React from "react";
import ReactDOM from "react-dom";
import Header from "./component/Header/Header";
import Intro from "./component/Intro/Intro";
import Skill from "./component/Skill/Skill";
import Work from "./component/Works/Work";
import Skillset from "./component/allSkill/Skillset";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
const App = () => {
  return (
    <div>
      <Header/>
      <Intro/>
      <Skill/>
      <Work/>
      <Skillset />
      <Contact/>
      <Footer/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
