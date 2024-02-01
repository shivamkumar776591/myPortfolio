import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import './Header.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = ["intro", "skills", "works", "contact"];
      let currentSection = null;

      sections.forEach((section) => {
        const target = document.getElementById(section);
        if (
          target.offsetTop <= scrollPosition + 100 &&
          target.offsetTop + target.offsetHeight > scrollPosition + 100
        ) {
          currentSection = section;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div id="logo">
        <p>myPortfolio</p>
      </div>
      <a href="#" className="toggle-button" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={`navmenu ${
            activeSection === "intro" ? "active" : ""
          }`}
          onSetActive={() => handleSetActive("intro")}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={`navmenu ${
            activeSection === "skills" ? "active" : ""
          }`}
          onSetActive={() => handleSetActive("skills")}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={`navmenu ${
            activeSection === "works" ? "active" : ""
          }`}
          onSetActive={() => handleSetActive("works")}
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={`navmenu ${
            activeSection === "contact" ? "active" : ""
          }`}
          onSetActive={() => handleSetActive("contact")}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
