import { Link } from "react-router-dom";
import Productoos from "../../Hooks/fetchproduct";
import { useEffect, useRef, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaShippingFast,
  FaCheckCircle,
  FaTags,
} from "react-icons/fa";
import styles from "./home.module.css";

function Productos({ products, scroll }) {
  return (
    <ul className={styles.productsList} ref={scroll}>
      {products.map((producto, index) => (
        <li key={index} className={styles.productoItem}>
          <div className={styles.imgProducto}>
            <img src={producto.image} alt={producto.title} />
          </div>
          <div className={styles.productoInfo}>
            <div className={styles.dateProduct}>
              <span>{producto.title}</span>
              <p>${producto.price}</p>
            </div>
            <Link
              state={{ product: producto }}
              to={`/producto/${producto.id}`}
              className={styles.btnProducto}
            >
              Ver
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}

function Home() {
  const [productss, setProductos] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    Productoos().then((data) => {
      setProductos(data.slice(0, 6));
    });
  }, []);

  const scrollRight = () => {
    const productoItem = scroll.current.querySelector(`.${styles.productoItem}`);
    if (!productoItem) return;

    const itemWidth = productoItem.offsetWidth;
    const gap = 16;
    scroll.current.scrollBy({ left: itemWidth + gap, behavior: "smooth" });
  };

  const scrollLeft = () => {
    const productoItem = scroll.current.querySelector(`.${styles.productoItem}`);
    if (!productoItem) return;

    const itemWidth = productoItem.offsetWidth;
    const gap = 16;

    scroll.current.scrollBy({ left: -(itemWidth + gap), behavior: "smooth" });
  };

  return (
    <main className={styles.mainContainer}>
      <section className={styles.heroSection}>
        <div className={styles.imgHero}>
          <img
            src="https://images.pexels.com/photos/1127000/pexels-photo-1127000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="hero-img"
          />
        </div>

        <div className={styles.heroContent}>
          <h1>
            Moda para ti solo en: <b>Web</b>tienda
          </h1>
          <Link to="/productos" className={styles.btnHero}>
            Ver productos
          </Link>
        </div>
      </section>

      <section className={`${styles.productsMoreBuys} ${styles.cont}`}>
        <div className={styles.titleProduc}>    
          <h2>Productos</h2>
          <Link to="/productos">Ver todos</Link>
        </div>
        <Productos products={productss} scroll={scroll} />
        <div className={styles.btnScroll}>
          <FaArrowLeft onClick={scrollLeft} />
          <FaArrowRight onClick={scrollRight} />
        </div>
      </section>

      <section className={`${styles.categoryHome} ${styles.cont}`}>
        <h2>Categorias</h2>
        <div className={styles.categoryList}>
          <div className={styles.firtsCategory}>
            <div className={styles.categoryOne}>
              <div className={styles.imgCategoryOne}>
                <img
                  src="https://images.pexels.com/photos/17054468/pexels-photo-17054468/free-photo-of-moda-hombre-en-pie-de-pie.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="category-one"
                />
              </div>
              <div className={styles.infoCategoryOne}>
                <h2>Hombres</h2>
                <Link to="/productos?categoria=men">Ver todos</Link>
              </div>
            </div>
            <div className={styles.categoryTwo}>
              <div className={styles.imgCategoryTwo}>
                <img
                  src="https://images.pexels.com/photos/32470884/pexels-photo-32470884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="category-two"
                />
              </div>
              <div className={styles.infoCategoryTwo}>
                <h2>Mujeres</h2>
                <Link to="/productos?categoria=women">Ver todos</Link>
              </div>
            </div>
          </div>

          <div className={styles.secondCategory}>
            <div className={styles.categoryThree}>
              <div className={styles.imgCategoryThree}>
                <img
                  src="https://images.pexels.com/photos/11185100/pexels-photo-11185100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="category-three"
                />
              </div>
              <div className={styles.infoCategoryThree}>
                <h2>Accesorios</h2>
                <Link to="/productos?categoria=jewelery">Ver todos</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.benefits}>
        <h3>¿Por qué elegirnos?</h3>
        <ul className={styles.benefitsList}>
          <li>
            <FaShippingFast className={styles.benefitIcon} />
            <div>
              <h4>Envío rápido y seguro</h4>
              <p>
                Recibe tus pedidos en tiempo récord con seguimiento en todo
                momento.
              </p>
            </div>
          </li>
          <li>
            <FaCheckCircle className={styles.benefitIcon} />
            <div>
              <h4>Productos de calidad garantizada</h4>
              <p>Solo trabajamos con marcas y proveedores confiables.</p>
            </div>
          </li>
          <li>
            <FaTags className={styles.benefitIcon} />
            <div>
              <h4>Descuentos exclusivos</h4>
              <p>Accede a ofertas especiales solo para clientes frecuentes.</p>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Home;