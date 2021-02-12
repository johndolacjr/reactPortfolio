import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <img src='https://photos.google.com/photo/AF1QipOiKB21TfY9LBOV0F1-0vM4xAAz6FcCFF0na6nu'/>; */}
      {/* <img src='/images/img-9.jpg' alt=""/> */}
      <video src='./videos/video-1.mp4' autoPlay loop muted />
      
      <h1></h1>
      <p>Hello! I'm <strong>John Dolac</strong>, a <a href="https://www.youtube.com/watch?v=wnHW6o8WMas">motivated</a> leader and developer who likes to overcome challenges and simplify problems.</p>

    </div>
  );
}

export default HeroSection;