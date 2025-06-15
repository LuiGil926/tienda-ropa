import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import styles from './header.module.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(`.${styles.hamburger}`) && !event.target.closest(`.${styles.mobileMenu}`)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);
  
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);
  
  return (
    <>
      <header className={styles.headerContainer}>
        <Link className={styles.logo} to="/" onClick={closeMenu}>
          <b>Web</b>tienda
        </Link>
        
        {/* Navegación desktop */}
        <nav className={styles.navContainer}>
          <ul className={styles.navList}>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </nav>
        
        {/* Botón hamburguesa */}
        <button
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label="Menú de navegación"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
        
        {/* Carrito - solo visible en desktop */}
        <Link className={styles.btnCart} to="/carrito" onClick={closeMenu}>
          <FaShoppingCart />
        </Link>
      </header>
      
      {/* Menú móvil */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ''}`}>
        <nav>
          <ul className={styles.mobileNavList}>
            <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
            <li><Link to="/sobre-nosotros" onClick={closeMenu}>Sobre Nosotros</Link></li>
            <li><Link to="/productos" onClick={closeMenu}>Productos</Link></li>
            <li><Link to="/contacto" onClick={closeMenu}>Contacto</Link></li>
            <li>
              <Link to="/carrito" onClick={closeMenu} className={styles.cartLink}>
                <FaShoppingCart /> Carrito
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;