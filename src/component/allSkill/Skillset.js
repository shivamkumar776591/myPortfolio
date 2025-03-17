import React from 'react';
import './p.css';  // Corrected the import
import c from './c.png'
import cpp from './c++.png'
import express from './express-JS.png'
import react from './reactjs.webp'
import mongodb  from './mongodb.png'
import css from './CSS.jpg'
import html from './html.png'
import javascript from './javascript.webp'
import nodejs from './nodejs.png';
import bootstrap from './bootstrap.png'
import github from './github-logo.png';
// import tailwind from './tailwindcss.png'

const Skillset = () => {
  return (
    <div className='skillContainer'>
      <h2 className='skillsHeading'>Skills</h2>
      <div className='floatingIcons'>
        {/* Include your skill icons with appropriate alt text */}
        <div className='skillIconWrapper'>
          <img className='skillLogo' src={c} alt='C' />
        </div>
        <div className='skillIconWrapper'>
          <img className='skillLogo' src={cpp} alt='C++' />
        </div>
        <div className='skillIconWrapper'>
          <img className='skillLogo' src={javascript} alt='Javascript' />
        </div>
        <div className='skillIconWrapper'>
          <img className='skillLogo' src={react} alt='reactjs' />
        </div>
        <div className='skillIconWrapper'>
          <img className='skillLogo' src={nodejs} alt='nodejs' />
        </div>
        <div className='skillIconWrapper'>
          <img className='skillLogo' src={css} alt='Css' />
        </div>
        <div className='skillIconWrapper'>
          <img className='skillLogo' src={html} alt='html' />
        </div>
        <div className='skillIconWrapper'>
          <img className='skillLogo' src={mongodb} alt='mongodb' />
        </div>
      
        <div className='skillIconWrapper'>
          <img className='skillLogo' src={bootstrap} alt='bootstrap' />
        </div>
        <div className='skillIconWrapper'>
          {/* <img className='skillLogo' src={tailwind} alt='tailwindCss' /> */}
          <img className='skillLogo' src= {github} alt = 'Github' />
        </div>
      </div>
    </div>
  );
};

export default Skillset;
