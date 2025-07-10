// src/pages/About.jsx
import React from 'react';
import { Link } from "react-router-dom";
import Alim from '../new/Alim.png';
import Limon from '../new/Limon.jpg'
import Rifat from '../new/Rifat.jpg'

import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-description">
        Welcome to our e-commerce platform where we blend technology and creativity to offer an exceptional online shopping experience. Meet the team that makes it all happen.
      </p>

      <div className="team-grid">
        {/* Product Manager */}
        <div className="team-card">
          <img src={Alim} alt="Product Manager" className="team-image" />
          <h2 className="team-name">Md Abdul Alim</h2>
          <p className="team-role">Product Manager</p>
          <p className="team-bio">
          Abdul Alim leads the vision of our platform, ensuring a seamless shopping experience. She brings a decade of e-commerce strategy and UX optimization expertise.
          </p>
        </div>

        {/* Developer 1 */}
        <div className="team-card">
          <img src={Limon} alt="Frontend Developer" className="team-image" />
          <h2 className="team-name">Md. Rafsan Zani</h2>
          <p className="team-role">Developer-1</p>
          <p className="team-bio">
            Rafsan crafts the user interface with React, making the website responsive, intuitive, and visually appealing across all devices.
          </p>
        </div>

        {/* Developer 2 */}
        <div className="team-card">
          <img src={Rifat} alt="Backend Developer" className="team-image" />
          <h2 className="team-name">Rifat Zaman</h2>
          <p className="team-role">Developer-2</p>
          <p className="team-bio">
            Rifat ensures everything runs smoothly behind the scenes, integrating APIs and managing secure data flow to keep our store running flawlessly.
          </p>
        </div>
      </div>

      <div className="about-home-link">
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default About;
