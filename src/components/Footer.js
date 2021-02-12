import React from 'react';
import './Footer.css';
// import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            
            <Link to='/' className='social-logo'>
              HUMBLE, ANALYTICAL, RESULTS DRIVEN, OUTDOORSY, FAMILY MAN
            </Link>

          </div>
          <div className='social-icons'>
          <a
              className='social-icon-link GitHub'
              href='https://github.com/johndolacjr'
              target='_blank'
              aria-label='GitHub'
            >
              <i className="fab fa-github" />
            </a>
          <a
              className='social-icon-link LinkedIn'
              href="https://www.linkedin.com/in/john-dolac-jr-56a0b81b/"
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </a> 
            <a
              className='social-icon-link instagram'
              href='https://www.instagram.com/adventurefamslc/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </a>           
            <a
              className='social-icon-link facebook'
              href='https://www.facebook.com/johnleeswagger'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </a>
            <a
              className='social-icon-link'
              href='https://drive.google.com/file/d/1uvlM7sby-M57voPPdrtp8xuFdYiiQhI1/view?usp=sharing'
              target='_blank'
              aria-label='Resume'
            >
              <i className="far fa-file" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;