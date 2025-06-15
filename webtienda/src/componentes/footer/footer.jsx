import './footer.css';

import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Navegación</h3>
          <Link to="/" className="footer-link">Inicio</Link>
          <Link to="/productos" className="footer-link">Productos</Link>
          <Link to="/sobre-nosotros" className="footer-link">Sobre Nosotros</Link>
          <Link to="/contacto" className="footer-link">Contacto</Link>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Ayuda</h3>
          <Link to="/faq" className="footer-link">Preguntas Frecuentes</Link>
          <Link to="/soporte" className="footer-link">Soporte</Link>
          <Link to="/politicas" className="footer-link">Políticas de Privacidad</Link>
          <Link to="/terminos" className="footer-link">Términos y Condiciones</Link>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Síguenos</h3>
          <div className="footer-social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <FaInstagram />
            </a>
            <a href="mailto:contacto@tuempresa.com" className="footer-social-link">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copy">&copy; {new Date().getFullYear()} <b>Web</b>tienda . Todos los derechos reservados.</div>
    </footer>
  );
};

export default Footer;
