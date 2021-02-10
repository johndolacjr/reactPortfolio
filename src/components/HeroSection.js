import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src='/images/img-home.jpg' alt=""/>
      <h1>ABOUT ME</h1>
      <p>Hello! I'm <strong>John Dolac</strong>, a <a href="https://www.youtube.com/watch?v=wnHW6o8WMas">motivated</a> leader and developer who likes to overcome challenges and simplify problems.</p>

    </div>
  );
}

export default HeroSection;