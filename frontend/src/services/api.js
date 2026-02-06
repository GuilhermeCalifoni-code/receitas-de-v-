import axios from 'axios';

const api = axios.create({
  baseURL: 'https://receitas-de-vo.onrender.com' 
});

export default api;