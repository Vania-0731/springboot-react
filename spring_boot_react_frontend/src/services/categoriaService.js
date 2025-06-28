import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/categorias';

const obtenerCategorias = () => {
  return axios.get(API_URL);
};

const obtenerCategoriaPorId = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

const agregarCategoria = (categoria) => {
  return axios.post(API_URL, categoria);
};

const actualizarCategoria = (id, categoria) => {
  return axios.put(`${API_URL}/${id}`, categoria);
};

const eliminarCategoria = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export default {
  obtenerCategorias,
  obtenerCategoriaPorId,
  agregarCategoria,
  actualizarCategoria,
  eliminarCategoria,
};