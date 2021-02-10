import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import ReactGhCal from 'react-github-calendar';




export default function Portfolio() {
  return (
  <>
    <ReactGhCal username='johndolacjr'/>
    <Cards />
    <Footer />
  </>
  );
}

