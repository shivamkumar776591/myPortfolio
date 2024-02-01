import React from 'react'
import './Contact.css'
import indeed from './indeed.png'
import internsala from './intersala.png'
import linkedin from './linkedin (1).png'
import github from './github.png'
import resume from './resumeicon.jpg'

const Contact = () =>{

    const handleButtonClick = () => {
        // Replace 'YOUR_GOOGLE_DRIVE_LINK' with the actual link to your resume file
        const resumeDriveLink = 'https://drive.google.com/file/d/13u8N-ZN57a-QzsXzIBuNCoP461yrfbVa/view?usp=sharing';
        
        // Open the resume link in a new tab/window
        window.open(resumeDriveLink, '_blank');
      };
    return(
        <div id = "contact">
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below for contact</span>
            <form className='contactForm'>
                <input placeholder='Your Name' className='name' type='text'></input>
                <input type='email' className='email' placeholder='Your Email'/>
                <textarea name='message' rows="5" placeholder='Your Message' className='msg'></textarea>
                <button type='submit' value="send" className='submitBtn'>Submit </button>
                <div className='links'>
                    <img src={linkedin} className='link' onClick={()=>{
                        window.open('https://www.linkedin.com/in/shivam776591/');
                    }}></img>
                    <img src={indeed} className='link' onClick={()=>{
                        window.open('https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-homepage&_ga=2.204519065.827059467.1704650011-1581930929.1704350576')
                    }}></img>
                    <img src={internsala} className='link' onClick={()=>{
                        window.open("https://internshala.com/student/dashboard");
                    }}></img>
                      <img src={github} className='link' onClick={()=>{
                        window.open("https://github.com/shivamkumar776591");
                    }}></img>
                </div>
            </form>
            <button
      className="download-button"
      onClick={handleButtonClick}
    >
      <img
        src={resume}
        alt="Resume Icon"
        className="resume-icon"
      />
      Download Resume
    </button>
        </div>
    );
}
export default Contact;