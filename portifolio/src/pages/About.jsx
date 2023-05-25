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
              Formado em Gestão de Logística, MBA em Gestão de Pessoas,
              trabalhei em uma multinacional(fabrica de vidro) durante 6 anos onde eu entrei na aréa de formação(Logística) e depois tive a oportunidade
              de ir para uma linha nova de produção onde atuei em trabalho com grupo nas àreas de produção, manutenção, operação equipamentos.
            </p>
            <p>
              Atualmente sou estudante da Trybe do curso de Desenvolvedor Web Full Stack.
              </p>
            <p>
              Meu objetivo é finalizar o curso e trabalhar na àrea de tecnologia, e estou trabalhando duro para alcançá-lo.
            </p>
            <p>
              Estou animado com as oportunidades de colaboração e conexões profissionais que você pode oferecer, então por favor,
              não hesite em entrar em contato comigo se você quiser conversar como podemos trabalhar juntos.
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
