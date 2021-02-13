import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      
      <h1></h1>
      <p>Hello! I'm <strong>John Dolac</strong>, a <a href="https://www.youtube.com/watch?v=lsSC2vx7zFQ">motivated</a> leader and developer who likes to overcome challenges and simplify problems.</p>
      <br></br>
      <p> I was raised in a military family where I learned the disciplines of loyalty, working hard, and taking on responsibility. I haved lived all over the US and in Germany. After 
        earning my Bachelors degree at Virginia Intermont College, I joined the military as a Horizantal Construction Engineer. Since then I have changed my MOS to Budget Management Technician which 
        gives me more opportunity to use my analytical passions. My desire to improve my analytical skills are what drove me to attend the Full Stack Development Bootcamp at the Unniversity of Utah. 
        This course has been intense but I have learned a lot and look forward to improving my coding abilities as the course winds down. </p>
      <br></br>
      {/* <p>Since moving my family out to Salt Lake City, we have grown to love the outdoors. We love spending our time hiking, camping, and site seeing throughout the west coast, or just spending time 
        together admiring the mountains from our roof top. We are looking to convert a school bus and live on the road so we can enjoy ALL that the US has to offer. 
      </p> */}
      <p>Please check out my portfolio tab, photography tab (under construction), and follow me on GitHub and check out my resume below. Feel free to check out my other social links to learn more about me.</p>



    </div>
  );
}

export default HeroSection;