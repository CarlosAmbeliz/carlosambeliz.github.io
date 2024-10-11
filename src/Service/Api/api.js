import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.siews.net/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
