import React from 'react';
import styles from '../styles/footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer} id="about-us">
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <a href="/">ZonaSport</a>
        </div>
        <p className={styles.footerDescription}>
          Descubre y compra las mejores zapatillas deportivas aquí. ¡Calzado de calidad a tu alcance!
        </p>
        <div className={styles.footerLinks}>
          <a href="/about">Acerca de</a>
          <a href="/contact">Contacto</a>
          <a href="/privacy">Política de Privacidad</a>
        </div>
        <div className={styles.footerAnimation}>
          <img src="/assets/img/shoe.png" alt="Shoe Animation" className={styles.shoe} />
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 zonasport. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
