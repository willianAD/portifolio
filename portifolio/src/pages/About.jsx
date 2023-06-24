import React from 'react';
import foto from '../images/Willian.jpg';
import '../styles/about.css';

class About extends React.Component {
  render() {
    return (
      <section>
        <h3>
          SOBRE MIM
          <div />
        </h3>
        <div className="div-about">
          <fieldset className="fieldset-about">
            <p>
              Olá sou Willian Afonso tenho 30 anos, sou natural de São José dos Campos - SP, apaixonado por esportes e músicas.
            </p>
            <p>
              Sou formado em Gestão de Logística e possuo uma pós-graduação em Gestão de Pessoas.
              Embora não tenha tido a oportunidade de trabalhar diretamente na área, adquiri experiência em uma multinacional onde atuei por 6 anos,
              inicialmente na área de formação em logística e posteriormente em uma linha de produção, desempenhando atividades relacionadas a produção,
              manutenção e operação de equipamentos.
            </p>
            <p>
              Recentemente, concluí o curso de desenvolvedor web full stack na Trybe e também decidi cursar uma eletiva em Java,
              ampliando assim meu conhecimento na área de tecnologia.
            </p>
            <p>
              Meu objetivo é direcionar minha carreira para a área de tecnologia e tenho me dedicado intensamente para alcançá-lo.
              Durante minha trajetória, obtive reconhecimento na Trybe, recebendo dois selos de destaque em mentoria e projetos,
              além do certificado de formação em front-end e back-end pelo término dos módulos.
            </p>
            <p>
              Estou animado com as possibilidades de colaboração e as conexões profissionais que você pode proporcionar.
              Por favor, não hesite em entrar em contato comigo para discutirmos como podemos trabalhar juntos.
              Me coloco à disposição para quaisquer dúvidas.
            </p>
            <img src="https://raw.githubusercontent.com/willianAD/willianAD/main/assets/gifs/Handshake.gif" alt="Handshake" className="handshake" />
          </fieldset>
          <img src={ foto } alt="Minha Foto" className="foto" />
        </div>
      </section>
    );
  }
}

export default About;
