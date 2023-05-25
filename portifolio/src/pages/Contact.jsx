import React from 'react';
import linkedin from '../images/linkedin-logo.png';
import telefone from '../images/tel.png';
import '../styles/contact.css';

class Contact extends React.Component {
  render() {
    return (
      <>
        <div className="contact-title">
          <h3>
            CONTATO
            <div />
          </h3>
        </div>
        <section>
          <body>
            <div className="contact-div">
              <div className="div-email">
                <p>Para qualquer dúvida, envie-me um e-mail:</p>
                <a href="https://img.shields.io/badge/-willian.afonso013@gmail.com-c14438?style=flat&logo=Gmail&logoColor=white&link=mailto:willian.afonso013@gmail.com">
                  <img src="https://img.shields.io/badge/-willian.afonso013@gmail.com-c14438?style=flat&logo=Gmail&logoColor=white&link=mailto:willian.afonso013@gmail.com" alt="email" className="contact-img4" />
                </a>
              </div>
              <div className="div-tel">
                <p>Ou se preferir pode me mandar um whatsapp/ligar:</p>
                <a href="https://img.shields.io/badge/-Whatsapp-4CA143?style=flat-square&labelColor=4CA143&logo=whatsapp&logoColor=white&link=https://api.whatsapp.com/send?phone=5512981491309&text=Olá!" className="tel">
                  <img src="https://img.shields.io/badge/-Whatsapp-4CA143?style=flat-square&labelColor=4CA143&logo=whatsapp&logoColor=white&link=https://api.whatsapp.com/send?phone=5512981491309&text=Olá!" alt="whatsapp" className="contact-img1" />
                </a>
                  <div className="div-img-tel">
                    <img src={ telefone } alt="telefone" className="img-tel" />
                  </div>
                  <p>+55 12 98149-1309</p>
              </div>
            </div>
            <p className="title-social">Me conheça nas redes sociais:</p>
            <div className="div-social">
              <a href="https://www.linkedin.com/in/willian-afonso-domingues/">
                <img src={ linkedin } alt="Linkedin" className="contact-img1" />
              </a>
              <a href="https://github.com/willianAD">
                <img src="https://img.shields.io/github/followers/willianAD?label=follow&style=social" alt="GitHub" className="contact-img2" />
              </a>
              <a href="https://www.instagram.com/willian.afonso.dev/">
                <img src="https://img.shields.io/badge/-@willian.afonso.dev-purple?style=flat&logo=instagram&logoColor=white&link=https://www.instagram.com/willian.afonso.dev/" alt="instagram" className="contact-img3" />
              </a>
            </div>
          </body>
        </section>
      </>
    );
  }
}

export default Contact;
