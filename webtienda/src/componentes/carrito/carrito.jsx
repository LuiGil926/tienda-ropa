import styles from "./carrito.module.css";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/carrito";
import { useContext, useEffect, useState } from "react";
import producys from "../../Hooks/fetchproduct";

function Carrito() {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const { carrito, setCarrito } = useContext(CarritoContext);

  useEffect(() => {
    producys().then((data) => {
      setAllProducts(data);
    });
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("carrito");
    if (stored) {
      const carritoDeserializado = JSON.parse(stored);
      setCarrito(carritoDeserializado);
    }
  }, []);

  useEffect(() => {
    const nuevosProductos = carrito.map((itemCarrito) => {
      const productoCompleto = allProducts.find((p) => p.id === itemCarrito.id);
      return { ...productoCompleto, cantidad: itemCarrito.cantidad };
    });
    setProducts(nuevosProductos);
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito, allProducts]);

  const agregarProducto = (id) => {
    const index = carrito.findIndex((item) => item.id === id);
    if (index !== -1) {
      const newcarrito = [...carrito];
      newcarrito[index].cantidad++;
      setCarrito(newcarrito);
    }
  };

  const eliminarProducto = (id) => {
    const index = carrito.findIndex((item) => item.id === id);
    if (index !== -1) {
      const newcarrito = [...carrito];
      if (newcarrito[index].cantidad > 1) {
        newcarrito[index].cantidad--;
      } else {
        newcarrito.splice(index, 1);
      }
      setCarrito(newcarrito);
    }
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Carrito</h1>
      {products.length > 0 ? (
        <div className={styles.productsContainer}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <Link state={{ product: product }} to={`/producto/${product.id}`}>
                <img src={product.image} alt={product.title} />
                <h3 className={styles.productTitle}>{product.title}</h3>
                <p className={styles.productPrice}>${product.price}</p>
                <p className={styles.productQuantity}>Cantidad: {product.cantidad}</p>
              </Link>
              <div className={styles.buttonGroup}>
                <button
                  className={`${styles.button} ${styles.deleteButton}`}
                  onClick={() => eliminarProducto(product.id)}
                >
                  Eliminar
                </button>
                <button
                  className={`${styles.button} ${styles.addButton}`}
                  onClick={() => agregarProducto(product.id)}
                >
                  Agregar
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className={styles.emptyCart}>Tu carrito está vacío</p>
      )}
    </main>
  );
}

export default Carrito;
