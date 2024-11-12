import React from 'react';
import './LandingPage.css';

// Import your images here
import logo from './images/logo.png'; // Lyfe logo
import instagramIcon from './images/instagram-logo.png'; // Instagram icon
import iphoneMockup from './images/iphone-mockup.jpg'; // iPhone mockup image
import bgImage1 from './images/bg-image1.jpg'; // Top left image
import bgImage2 from './images/bg-image2.jpg'; // Top right image
import bgImage3 from './images/bg-image3.jpg'; // Bottom left image
import bgImage4 from './images/bg-image4.jpg'; // Bottom right image
import bgImage5 from './images/bg-image5.jpg'; // Vertical center-right image
import xlogo from './images/x-logo.png'; // X logo

function LandingPage() {
    return (
      <div className="landing-page">
        {/* Header */}
        <header className="header fade-in">
          <div className="header-content">
            <img src={logo} alt="Lyfe Logo" className="lyfe-logo" />
            <h1 className="header-heading">Lyfe</h1>
          </div>
        </header>
  
        <main className="main-content fade-in">
          <div className="social-icons">
            <a href="https://www.instagram.com/ideal.lyfe/profilecard/?igsh=b29tcnJ6ZDA5enNl" target="_blank" rel="noreferrer">
              <img src={instagramIcon} alt="Instagram" className="social-icon" />
            </a>
            <a href="https://x.com/LyfeisSocial" target="_blank" rel="noreferrer">
              <img src={xlogo} alt="X" className="social-icon" />
            </a>
          </div>
          <h1 className="main-heading">Be real. Be Calm.</h1>
          <p className="subheading">This is a test of heights by AI</p>
          <a href="https://forms.fillout.com/t/2HnnrSfJU9us" target="_blank" rel="noreferrer">
            <button className="cta-button">Get Early Access</button>
          </a>

          {/* Mobile Footer Content */}
          <div className="mobile-footer-content">
            <div className="social-icons">
              <a href="https://www.instagram.com/ideal.lyfe/profilecard/?igsh=b29tcnJ6ZDA5enNl" target="_blank" rel="noreferrer">
                <img src={instagramIcon} alt="Instagram" className="social-icon" />
              </a>
              <a href="https://x.com/LyfeisSocial" target="_blank" rel="noreferrer">
                <img src={xlogo} alt="X" className="social-icon" />
              </a>
            </div>
            <p>Location: Ottawa, Canada</p>
            <p>Email: info.socialyfe@gmail.com</p>
          </div>
        </main>
  
        {/* Background Images */}
        <div className="background-images fade-in">
          <img src={bgImage1} alt="People Walking" className="bg-image image1" />
          <img src={bgImage2} alt="Indoor Bar Scene" className="bg-image image2" />
          <img src={bgImage3} alt="Dining Table Close-up" className="bg-image image3" />
          <img src={bgImage4} alt="Stylish Individuals" className="bg-image image4" />
          <img src={bgImage5} alt="Outdoor Structure with Greenery" className="bg-image image5" />
        </div>
  
        {/* Central Visual Element */}
        <div className="phone-mockup fade-in">
          <img src={iphoneMockup} alt="iPhone Mockup" className="iphone-mockup" />
        </div>
  
        {/* Footer for Desktop */}
        <footer className="footer fade-in">
          <p>Location: Ottawa, Canada</p>
          <p>Email: info.socialyfe@gmail.com</p>
        </footer>
      </div>
    );
  }

export default LandingPage;
