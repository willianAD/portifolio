import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Linkedin from '../images/linkedin.png';
import GitHub from '../images/GitHub.png';
import Dark from '../images/dark-mode-icon.png';
import Ligth from '../images/light-mode-icon.png';
import '../styles/header.css';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      theme: 'ligthMode',
    };
  };

  componentDidMount() {
    if (localStorage.getItem('theme') === 'darkMode') {
      this.changeThemeToDark();
    } else {
      this.changeThemeToLigth();
    }
  }

  changeThemeToDark = () => {
    const {changeMode } = this.props;
    localStorage.setItem('theme', 'darkMode');
    this.setState({
      theme: 'darkMode',
    });
    changeMode('darkMode');
  };

  changeThemeToLigth = () => {
    const {changeMode } = this.props;
    console.log(changeMode);
    localStorage.setItem('theme', 'ligthMode');
    this.setState({
      theme: 'ligthMode',
    });
    changeMode('ligthMode');
  };

  render() {
    const { theme } = this.state;
    return (
      <header>
        <div className="div-mode">
          {
            theme === "ligthMode" ? (
              <input type="image" src={ Ligth } className="ligthMode" alt="LigthMode" onClick={ this.changeThemeToDark} />
            ) : (
              <input type="image" src={ Dark } className="darkMode" alt="DarkMode" onClick={ this.changeThemeToLigth } />

            )
          }
        </div>
        <Link to="/" className={theme === "ligthMode" ? "link-ligth" : "link-dark"}>
          <p>PÁGINA INICIAL</p>
        </Link>
        <Link to="/about" className={theme === "ligthMode" ? "link-ligth" : "link-dark"}>
          <p>SOBRE MIM</p>
        </Link>
        <Link to="/stacks" className={theme === "ligthMode" ? "link-ligth" : "link-dark"}>
          <p>TECNOLOGIAS E STACKS</p>
        </Link>
        <Link to="/projects" className={theme === "ligthMode" ? "link-ligth" : "link-dark"}>
          <p>PROJETOS</p>
        </Link>
        <Link to="/contact" className={theme === "ligthMode" ? "link-ligth" : "link-dark"}>
          <p>CONTATO</p>
        </Link>
        <a href="https://www.linkedin.com/in/willian-afonso-domingues/">
          <img src={ Linkedin } alt="Linkedin" />
        </a>
        <a href="https://github.com/willianAD">
          <img src={ GitHub } alt="GitHub" />
        </a>
      </header>
    );
  }
}

Header.propTypes = {
  changeMode: PropTypes.func.isRequired,
}

export default Header;
