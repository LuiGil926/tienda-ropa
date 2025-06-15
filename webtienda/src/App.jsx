import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./componentes/header/header";
import AboutUs from "./componentes/sobreNosotros/about-us";
import Productos from "./componentes/Productos/productos";
import Contacto from "./componentes/contacto/contacto";
import Footer from "./componentes/footer/footer";
import Home from "./componentes/Homen/home";
import ProductoSolo from "./componentes/Producto/producto";
import Carrito from "./componentes/carrito/carrito";

function App() {
  return (
    <>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-nosotros" element={<AboutUs />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/producto/:id" element={<ProductoSolo />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
          <Footer />
        </Router> 


    </>
  );
}

export default App;