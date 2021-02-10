import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            
            <Link to='/' className='social-logo'>
              HUMBLE, ANALYTICAL, HARD WORKING, LOVER OF THE OUTDOORS, FAMILY MAN
            </Link>
            
          </div>
          <div class='social-icons'>
          <Link
              class='social-icon-link GitHub'
              to='/'
              target='_blank'
              aria-label='GitHub'
            >
              <i class="fab fa-github" />
            </Link>
          <Link
              class='social-icon-link LinkedIn'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link> 
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>           
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;