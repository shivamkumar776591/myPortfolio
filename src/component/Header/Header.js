import React from 'react';
import { Link } from 'react-scroll'; // Correct import
import "./Header.css";

import { useState } from 'react';

const Header = () =>{
  const [showMenu,setShowMenu] = useState(false);
  return(
    <nav className='navbar'>
      <p className='logo'>myPortfolio</p>
      <div className='desktopMenu'>
        <Link activeClass="active" className="desktopMenuListItem" to="intro" spy={true} smooth={true} offset = {-100} duration={500}>Home</Link>
        <Link activeClass="active" className="desktopMenuListItem" to="skills" spy={true} smooth={true} offset = {-100} duration={500}>About</Link>
        <Link activeClass="active" className="desktopMenuListItem" to="works" spy={true} smooth={true} offset = {-100} duration={500}>Portfolio</Link>
        <Link activeClass="active" className="desktopMenuListItem" to="contact" spy={true} smooth={true} offset = {-100} duration={500}>Contact Me</Link>
      </div>
      {/* <img src= {menu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)}></img> */}
      <div class="menu-container">
  <div class="mobMenu" onClick={()=>setShowMenu(!showMenu)}>
    <span className="line"></span>
    <span className="line"></span>
    <span className="line"></span>
  </div>
  </div>
      <div className='navMenu' style={{display: showMenu?'flex':'none'}}>
        <Link activeClass="active" className="listItem" to="intro" spy={true} smooth={true} offset = {-100} duration={500} onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass="active" className="listItem" to="skills" spy={true} smooth={true} offset = {-100} duration={500} onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass="active" className="listItem" to="works" spy={true} smooth={true} offset = {-100} duration={500} onClick={()=>setShowMenu(false)}>Portfolio</Link>
        <Link activeClass="active" className="listItem" to="contact" spy={true} smooth={true} offset = {-100} duration={500} onClick={()=>setShowMenu(false)}>Contact Me</Link>
      </div>
</nav>
  );
}
export default Header;
