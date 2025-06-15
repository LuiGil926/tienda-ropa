import styles from "./productos.module.css";

import { CarritoContext } from "../../context/carrito";
import products from "../../Hooks/fetchproduct";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

function Productos() {
  const [productos, setProductos] = useState([]);
  const [filtroActivo, setFiltroActivo] = useState(false);
  const [busqueda, setBusqueda] = useState({
    buscar: "",
    categoria: "todas",
    precio: 0,
  });
  const { carrito, setCarrito } = useContext(CarritoContext);

  useEffect(() => {
    products().then((data) => {
      setProductos(data);
    });
  }, []);

  const toggleFiltro = () => {
    setFiltroActivo(!filtroActivo);
  };

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

  const Newproduc = productos.filter((item) => {
    const nombreMatch = item.title
      .toLowerCase()
      .includes(busqueda.buscar.toLowerCase());
    const precioMatch = item.price >= busqueda.precio;
    const categoriaMatch =
      busqueda.categoria === "todas" || item.category === busqueda.categoria;

    return nombreMatch && precioMatch && categoriaMatch;
  });

  return (
    <main className={styles.mainProductos}>
      <div className={styles.title}>
        <h2>Productos</h2>
        <button
          className={`${styles.filters} ${filtroActivo ? styles.active : ""}`}
          onClick={toggleFiltro}
        >
          {filtroActivo ? "Cerrar" : "Filtros"}
        </button>
      </div>

      {filtroActivo && (
        <div className={styles.filtroPanel}>
          <label htmlFor="buscar">
            Buscar
            <input
              type="text"
              name="buscar"
              id="buscar"
              value={busqueda.buscar}
              onChange={(e) =>
                setBusqueda({ ...busqueda, buscar: e.target.value })
              }
            />
          </label>

          <label htmlFor="categoria">
            Categoria
            <select
              name="categoria"
              id="categoria"
              value={busqueda.categoria}
              onChange={(e) =>
                setBusqueda({ ...busqueda, categoria: e.target.value })
              }
            >
              <option value="todas">Todas</option>
              <option value="men's clothing">Hombres</option>
              <option value="women's clothing">Mujeres</option>
              <option value="jewelery">Joyeria</option>
            </select>
          </label>

          <label htmlFor="precio">
            Precio
            <input
              type="range"
              name="precio"
              id="precio"
              min="0"
              max="2000"
              value={busqueda.precio}
              onChange={(e) =>
                setBusqueda({ ...busqueda, precio: e.target.value })
              }
            />
            <p>{busqueda.precio}-2000$</p>
          </label>

          <button
            type="button"
            className={styles.btn_filtro}
            onClick={() => {
              setBusqueda({
                buscar: "",
                categoria: "todas",
                precio: 0,
              });
              setFiltroActivo(false);
            }}
          >
            Limpiar filtros
          </button>
        </div>
      )}

      <div className={styles.productos}>
        {Newproduc.map((producto, index) => (
          <div className={styles.producto} key={index}>
            <Link
              state={{ product: producto }}
              to={`/producto/${producto.id}`}
              className={styles.img_producto}
            >
              <img src={producto.image} alt={producto.title} />
            </Link>
            <div className={styles.producto_info}>
              <p>{producto.title}</p>
              <p className={styles.precio}>${producto.price.toFixed(2)}</p>
              <div className={styles.btn_producto}>
                <button>Comprar</button>
                <button onClick={() => agregarProducto(producto.id)}>Agregar a carrito</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Productos;
