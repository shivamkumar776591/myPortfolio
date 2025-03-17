// Work.jsx

import React from 'react';
import gofood from './gofood.png';
import hospital from './hospital.png';
import student from './Student.png';
import college1 from './10th.jpg'; 
import college2 from './12th.avif'; 
import college3 from './college.webp'; 
import expoSysImage from './exposys.png';
import troywingImage from './troywingImage.jpeg';
import Medidhan from './logo_blue.png';

import './Work.css';

const projects = [
    {
      title: 'Food Delivery Website',
      image: gofood,
      description: 'This is a food delivery application developed using React, Node.js, and MongoDB. It allows users to order food from local restaurants.',
      skills : 'React, Node.js, Expressjs, Stripe api, MongoDB, Bootstrap',
    },
    {
      title: 'Hospital Management Sysytem',
      image: hospital,
      description: 'The hospital management system to manage hospital related works. It manages the hospital related tasks such as appointment Booking etc.',
      skills: 'Html, CSS, JavaScripts, Bootstrap5, NodeJS, ExpressJs, Mongodb',
    },
    {
      title: 'Student Management System',
      image: student,
      description: 'The student management sysytem to manage studemt related works. It manages the student related tasks like managing enrollment, marks, studentlist etc. ',
      skills: 'Html, CSS, JavaScripts, Bootstrap5, NodeJS, ExpressJs, Mongodb',
    },
  ];

const education = [
  {
    institution: 'IIIT Manipur',
    image: college3, 
    details: 'Course: B.tech, Branch: CSE, Graduation Year: 2024',
  },
 
  {
    institution: 'Delhi Model Public School Kulhariya, Biahr',
    image: college2, 
    details: '12th Percentage: 88.4%, Year: 2020',
  },
  {
    institution: 'DAV Public School Dhanpura Ara,Bihar',
    image: college1, 
    details: '10th Percentage: 91.4%, Year: 2018',
  },
  
];
const internships = [
  {
    company:'Medidhan',
    image:Medidhan,
    position:' Full Stack Developer Intern',
    duration:'April 2024 - June 2024',
    certificateLink:'https://drive.google.com/file/d/1DXX7l986rcBwXeIIrDMQMIsP7E-VqaQ1/view?usp=sharing'
  },
  {
    company:'Troywings Technologies',
    image:troywingImage,
    position:'Full Stack developer Intern',
    duration:'Jan 2024 - June 2024',
    certificateLink:'https://drive.google.com/file/d/1w2jN9PuVRHcNMJsTxB3N-B5ymmlHf2rm/view?usp=sharing'
  },
    {
      company: 'Exposys Data Labs',
      image: expoSysImage, 
      position: 'Web Developer Intern',
      duration: 'June 2022 - July 2022',
      certificateLink: 'https://drive.google.com/file/d/14IKZ-D2-khEVqs7tdAMnm1Q-xQgrBBu1/view?usp=sharing', // Replace with the actual link
    },
    
    
  ];

const Work = () => {
  return (
    <section id='works'>
      <h2 className='sectionTitle'>Education</h2>
      <div className='educationCards'>
        {education.map((edu, index) => (
          <div key={index} className='educationCard'>
            <img className='educationImage' src={edu.image}  alt='' />
            <div className='educationDetails'>
              <div className='institution'>{edu.institution}</div>
              <div className='details'>{edu.details}</div>
            </div>
          </div>
        ))}
      </div>
      <section id='internships'>
        <h2 className='sectionTitle'>Internships</h2>
        <div className='internshipCards'>
          {internships.map((internship, index) => (
            <div key={index} className='internshipCard'>
              <img className='internshipImage' src={internship.image} alt='' />
              <div className='internshipDetails'>
                <div className='company'>{internship.company}</div>
                <div className='position'>{internship.position}</div>
                <div className='duration'>{internship.duration}</div>
                <div className='certificateLink'>
                  <a href={internship.certificateLink} target='_blank' rel='noopener noreferrer'>View Certificate</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id='works'>
        <h2 className='worksTitle'>My Projects</h2>
        <span className='workDesc'>I take pride in developing these projects on my own</span>
        <div className='worksImgs'>
          {projects.map((project, index) => (
            <div key={index} className='worksImgContainer'>
              <img className='worksImg' src={project.image} alt='' />
              <div className='worksImgOverlay'>
                <div className='overlayContent'>
                  <div className='image-title'>{project.title}</div>
                  <div className='image-description'><p>{project.description}</p></div>
                  <div className='image-skills'><span className='skillUsed'>Skills:</span>{project.skills}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

export default Work;
