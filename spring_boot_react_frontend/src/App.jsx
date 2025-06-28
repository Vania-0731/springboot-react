import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListaProductos from './components/ListaProductos';
import RegistrarProducto from './components/RegistrarProducto';
import ListaCategorias from './components/ListaCategorias';
import RegistrarCategoria from './components/RegistrarCategoria';
import Home from './pages/Home'; // Importamos el componente Home

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Ruta de inicio */}
          <Route path="/productos" element={<ListaProductos />} />
          <Route path="/registrar-producto" element={<RegistrarProducto />} />
          <Route path="/actualizar-producto/:id" element={<RegistrarProducto />} />
          <Route path="/categorias" element={<ListaCategorias />} />
          <Route path="/registrar-categoria" element={<RegistrarCategoria />} />
          <Route path="/actualizar-categoria/:id" element={<RegistrarCategoria />} />
        </Routes>
    </Router>
  );
};

export default App;