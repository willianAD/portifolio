import React from 'react';
import Linkedin from '../images/linkedin.png';
import GitHub from '../images/GitHub.png';
import '../styles/footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="div-contact">
          <div className="div-img">
            <a href="https://www.linkedin.com/in/willian-afonso-domingues/">
              <img src={ Linkedin } alt="Linkedin" className="social-network" />
            </a>
            <a href="https://github.com/willianAD">
              <img src={ GitHub } alt="GitHub" className="social-network" />
            </a>
          </div>
          <span>
            <p>+55 12 98149-1309</p>
            <p>willian.afonso013@gmail.com</p>
          </span>
        </div>
        <div className="div-line" />
        <div className="div-author">
          <span>© Copyright 2023. Made by Willian Afonso</span>
        </div>
      </footer>
    );
  }
}

export default Footer;
