import React from 'react';
import images from '../images/data';
import imagesFrontEnd from '../images/dataFrontEnd';
import imagesBackEnd from '../images/dataBackEnd';
import imagesTest from '../images/dataTest';
import styles from '../styles/stacks.module.css';

class Stacks extends React.Component {
  constructor() {
    super();
    this.state = ({
      styles: styles,
    });
  }
  render() {
    const { styles } = this.state;
    return (
      <section className={ styles.technologies }>
        <h3 className={ styles.Title }>
          Tecnologias e Stacks
          <div />
        </h3>
        <p className={ styles.Text }>
          CORE
        </p>
        <fieldset className={ styles.stacks }>
        {
        images.map(({ icon, name }, index) => (
          <div key={ index } className={ styles.sta }>
            <img 
              src={ icon } 
              className={ styles.stack } 
              alt="icon" 
              id={`stack${ index }`}
            />
            <p className={ styles.name }>{ name }</p>
          </div>
        )
        )}
        </fieldset>
        <p className={ styles.Text }>
          FRONT END
        </p>
        <fieldset className={ styles.stacks }>
        {
          imagesFrontEnd.map(({ icon, name }, index) => (
            <div key={ index } className={ styles.sta }>
            <img 
              src={ icon } 
              className={ styles.stack } 
              alt="icon" 
              id={`stack${ index }`}
            />
            <p className={ styles.name }>{ name }</p>
          </div>
        )
        )}
        </fieldset>
        <p className={ styles.Text }>
          BACK END
        </p>
        <fieldset className={ styles.stacks }>
        {
          imagesBackEnd.map(({ icon, name }, index) => (
            <div key={ index } className={ styles.sta }>
            <img 
              src={ icon } 
              className={ styles.stack } 
              alt="icon" 
              id={`stack${ index }`}
            />
            <p className={ styles.name }>{ name }</p>
          </div>
        )
        )}
        </fieldset>
        <p className={ styles.Text }>
          TESTES
        </p>
        <fieldset className={ styles.stacks }>
        {
          imagesTest.map(({ icon, name }, index) => (
            <div key={ index } className={ styles.sta }>
            <img 
              src={ icon } 
              className={ styles.stack } 
              alt="icon" 
              id={`stack${ index }`}
            />
            <p className={ styles.name }>{ name }</p>
          </div>
        )
        )}
        </fieldset>
      </section>
    );
  }
}

export default Stacks;
