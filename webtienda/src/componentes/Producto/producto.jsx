import styles from "./producto.module.css";

import { useLocation } from "react-router-dom";
import { CarritoContext } from "../../context/carrito"; 
import { useContext } from "react";

function ProductoSolo() {
  const location = useLocation();
  const producto = location.state.product;
  const { carrito, setCarrito } = useContext(CarritoContext);

  const agregarProducto = (id) => {
    const index = carrito.findIndex((item) => item.id === id);

    if (index === -1) {
      setCarrito([...carrito, { id, cantidad: 1 }]);
    } else {
      const newcarrito = [...carrito];
      newcarrito[index].cantidad++;
      setCarrito(newcarrito);
    }

    if (localStorage.getItem("carrito")) {
      localStorage.removeItem("carrito");
    }
    
    localStorage.setItem("carrito", JSON.stringify(carrito));
  };

  return (
    <div className={styles.producto}>
      <div className={styles.img_producto}>
        <img src={producto.image} alt={producto.title} />
      </div>
      <div className={styles.producto_info}>
        <h2>{producto.title}</h2>
        <p className={styles.descripcion}>{producto.description}</p>
        <p className={styles.precio}>${producto.price.toFixed(2)}</p>
        <p className={styles.disponible}>Disponible: {producto.rating.count}</p>
        <p className={styles.category}>category: {producto.category}</p>
        <button className={styles.btn_producto}>Comprar</button>
        <button onClick={() => agregarProducto(producto.id)} className={styles.btn_producto}>Agregar a carrito</button> 
      </div>
    </div>
  );
}

export default ProductoSolo;