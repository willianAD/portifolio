import React from 'react';
import linkPreview from '../images/link-preview.png';
import github from '../images/GitHub.png';
import appDelivery from '../images/repositorios-img/AppDelivery.png';
import trivia from '../images/repositorios-img/Trivia.png';
import onlineStore from '../images/repositorios-img/OnlineStore.png';
import trybeWallet from '../images/repositorios-img/TrybeWallet.png';
import trybeTunes from '../images/repositorios-img/TrybeTunes.png';
import tryunfo from '../images/repositorios-img/Tryunfo.png';
import shoppingCart from '../images/repositorios-img/ShoppingCart.png';
import solarSystem from '../images/repositorios-img/SolarSystem.png';
import starWars from '../images/repositorios-img/StarWars.png';
import '../styles/projects.css';

class Projects extends React.Component {
  render() {
    return (
      <>
        <h3>
          MEUS PROJETOS
          <div />
        </h3>
        <section className="section-projects">
          <div className="div-projects">
            <div className="div-project-individual">
              <img src={ appDelivery } alt="Preview"  className="img-projects" />
              <h3>App de Delivery</h3>
              <p>
                App de delivery de bebidas com funcionalidades de login, cadastro,
                efetuar compra acompanhar o status dos pedidos...
              </p>
              <p>JavaScript, React, Redux, Node.JS, Express, MySQL, Docker</p>
              <div className="projects-links">
                <a href="https://willianad.github.io/Project-App-Delivery" className="a-links">
                  <img src={ linkPreview } alt="" className="link-img" />
                  Visualização
                </a>
                <a href="https://github.com/willianAD/Project-App-Delivery" className="a-links">
                  <img src={ github } alt="" className="github-img" />
                  Repositório
                </a>
              </div>
            </div>
            <div className="div-project-individual">
              <img src={ trivia } alt="Preview" className="img-projects" />
              <h3>Trivia</h3>
              <p>
                Um jogo de perguntas e respostas baseado no jogo Trivia, parecido um show do milhão americano,
                com login email para entrar armazenando as pontuações dos usuarios na página de ranking...
              </p>
              <p>JavaScript, React, Redux, CSS3, POO</p>
              <div className="projects-links">
                <a href="https://willianad.github.io/Project-Trivia/" className="a-links">
                  <img src={ linkPreview } alt="" className="link-img" />
                  Visualização
                </a>
                <a href="https://github.com/willianAD/Project-Trivia" className="a-links">
                  <img src={ github } alt="" className="github-img" />
                  Repositório
                </a>
              </div>
            </div>
            <div className="div-project-individual">
              <img src={ onlineStore } alt="Preview" className="img-projects" />
              <h3>Online Store</h3>
              <p>
                Um e-commerce, uma loja online, alimentada por uma API do Mercado Livre, com funcinalidade de adicionar
                itens no carrinho podendo aumentar a quantidade de itens e remove-los...
              </p>
              <p>JavaScript, React, CSS3, POO</p>
              <div className="projects-links">
                <a href="https://willianad.github.io/Project-Frontend-Online-Store/" className="a-links">
                  <img src={ linkPreview } alt="" className="link-img" />
                  Visualização
                </a>
                <a href="https://github.com/willianAD/Project-Frontend-Online-Store" className="a-links">
                  <img src={ github } alt="" className="github-img" />
                  Repositório
                </a>
              </div>
            </div>
            <div className="div-project-individual">
              <img src={ trybeWallet } alt="Preview" className="img-projects" />
              <h3>Trybe Wallet</h3>
              <p>
                Uma aplicação que computa gastos em diferentes moedas e converte tudo para uma única moeda,
                que pode ser escolhida pelo usuario. Com funcionalidade de login e podendo editar ou excluir qualquer
                despesa incluida...
              </p>
              <p>JavaScript, React, Redux, CSS3, POO</p>
              <div className="projects-links">
                <a href="https://willianad.github.io/Project-TrybeWallet/" className="a-links">
                  <img src={ linkPreview } alt="" className="link-img" />
                  Visualização
                </a>
                <a href="https://github.com/willianAD/Project-TrybeWallet" className="a-links">
                  <img src={ github } alt="" className="github-img" />
                  Repositório
                </a>
              </div>
            </div>
            <div className="div-project-individual">
              <img src={ trybeTunes } alt="Preview" className="img-projects" />
              <h3>TrybeTunes</h3>
              <p>
              Qual é o seu estilo musical favorito? Nesse projeto eu criei uma aplicação para pesquisar e
              listar álbuns e músicas de várias bandas e artistas.
              Será possível até mesmo ouvir o preview de cada música. Além disso, você também poderá favoritar
              suas músicas preferidas...
              </p>
              <p>JavaScript, React, CSS3, POO</p>
              <div className="projects-links">
                <a href="https://willianad.github.io/Project-TrybeTunes/" className="a-links">
                  <img src={ linkPreview } alt="" className="link-img" />
                  Visualização
                </a>
                <a href="https://github.com/willianAD/Project-TrybeTunes" className="a-links">
                  <img src={ github } alt="" className="github-img" />
                  Repositório
                </a>
              </div>
            </div>
            <div className="div-project-individual">
              <img src={ tryunfo } alt="Preview" className="img-projects" />
              <h3>Tryunfo</h3>
              <p>
                Um jogo no estilo Super Trunfo, em que é possível criar novas cartas e listar as cartas
                já existentes no baralho, também é possivel excluir as cartas do baralho...
              </p>
              <p>JavaScript, React, CSS3, POO</p>
              <div className="projects-links">
                <a href="https://willianad.github.io/Project-Tryunfo/" className="a-links">
                  <img src={ linkPreview } alt="" className="link-img" />
                  Visualização
                </a>
                <a href="https://github.com/willianAD/Project-Tryunfo" className="a-links">
                  <img src={ github } alt="" className="github-img" />
                  Repositório
                </a>
              </div>
            </div>
            <div className="div-project-individual">
              <img src={ starWars } alt="Preview" className="img-projects" />
              <h3>Star Wars</h3>
              <p>
                Uma aplicação que consulta uma API para recuperar dados dos planetas do universo de Star Wars.
                Possivel filtrar por todos os campos, ordenar de forma crescente ou decrescente ou remover todos filtros...
              </p>
              <p>JavaScript, React, Contex API, Hooks, CSS3</p>
              <div className="projects-links">
                <a href="https://willianad.github.io/Project-Star-Wars/" className="a-links">
                  <img src={ linkPreview } alt="" className="link-img" />
                  Visualização
                </a>
                <a href="https://github.com/willianAD/Project-Star-Wars" className="a-links">
                  <img src={ github } alt="" className="github-img" />
                  Repositório
                </a>
              </div>
            </div>
            <div className="div-project-individual">
              <img src={ solarSystem } alt="Preview" className="img-projects" />
              <h3>Solar System</h3>
              <p>
              projeto em React renderiza imagens dos planetas do sistema solar em tamanhos relativamente proporcionais.
              Ele também simula um consumo de uma API com informações sobre missões espaciais...
              </p>
              <p>JavaScript, React, CSS3, POO</p>
              <div className="projects-links">
                <a href="https://willianad.github.io/Project-Solar-System/" className="a-links">
                  <img src={ linkPreview } alt="" className="link-img" />
                  Visualização
                </a>
                <a href="https://github.com/willianAD/Project-Solar-System" className="a-links">
                  <img src={ github } alt="" className="github-img" />
                  Repositório
                </a>
              </div>
            </div>
            <div className="div-project-individual">
              <img src={ shoppingCart } alt="Preview" className="img-projects" />
              <h3>Shopping Cart</h3>
              <p>
                Um e-commerce, como, por exemplo, Amazon, Americanas e Submarino, possui um carrinho de compras
                para auxiliar as pessoas consumidoras a salvar os itens que desejam comprar...
              </p>
              <p>JavaScript, HTML5, CSS3, DOM</p>
              <div className="projects-links">
                <a href="https://willianad.github.io/Project-Shopping-Cart/" className="a-links">
                  <img src={ linkPreview } alt="" className="link-img" />
                  Visualização
                </a>
                <a href="https://github.com/willianAD/Project-Shopping-Cart" className="a-links">
                  <img src={ github } alt="" className="github-img" />
                  Repositório
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Projects;
