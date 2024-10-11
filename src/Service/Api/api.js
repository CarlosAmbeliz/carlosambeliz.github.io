import axios from 'axios';

const api = axios.create({
  baseURL: 'oci-server.ddns.net:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
