import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import pfp from '../assets/images/ProfilePhoto.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={pfp} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Rjay2003" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/riley-walsh-2ab8a7257/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Riley Walsh</h1>
          <p>Game Designer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Rjay2003" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/riley-walsh-2ab8a7257/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;