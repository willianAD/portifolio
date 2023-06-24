import React from 'react';
import gif from '../images/dev-mario.gif';
import foto from '../images/MinhaFoto.jpeg';
import '../styles/homepage.css';

class HomePage extends React.Component {
  render() {
    return (
      <section>
        <div className="div-gifs">
          <img src="https://raw.githubusercontent.com/willianAD/willianAD/main/assets/gifs/Hi.gif" alt="Handshake" className="img-home" />
          {
            localStorage.getItem('theme') === "ligthMode" ?
              <a href="https://github.com/willianAD">
                <img src="https://readme-typing-svg.demolab.com?font=VT323&size=40&duration=2000&pause=1000&color=202EFF&center=true&vCenter=true&multiline=true&width=500&height=200&lines=Ol%C3%A1!+Eu+sou+Willian+Afonso%2C;Bem+vindo+ao+meu+Portif%C3%B3lio!" alt="Typing SVG" className="gif-hello" />
              </a>
            :
              <a href="https://github.com/willianAD">
                <img src="https://readme-typing-svg.demolab.com?font=VT323&size=40&duration=2000&pause=1000&color=FFFFFF&center=true&vCenter=true&multiline=true&width=500&height=200&lines=Ol%C3%A1!+Eu+sou+Willian+Afonso%2C;Bem+vindo+ao+meu+Portif%C3%B3lio!" alt="Typing SVG" className="gif-hello" />
              </a>
          }
          <br />
          <img src={ gif } alt="MarioDev" className="gif-dev" />
        </div>
        <div className="div-home">
          <div className="div-foto">
            <img src={ foto } alt="Me" className="minha-foto" />
          </div>
          <div className="div-into">
            <p>
              Fique à vontade entre e não bata a porta ao sair. <br /><br />
              Estou aberto para receber feedbacks sobre meu código. <br /><br />
              Me chame para conversar sobre alguma tecnologia interessante, vou adorar. <br /><br />
              Utilize a barra de navegação para saber mais sobre mim, minhas stacks e 
              meus projetos, além de me contatar. <br /><br />
              Agradeço sua visita, e até logo!
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default HomePage;
