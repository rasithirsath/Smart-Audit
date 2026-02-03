import axios from "axios";

const api = axios.create({
<<<<<<< HEAD
  baseURL: "https://smart-audit-backend.onrender.com",
=======
  baseURL: process.env.REACT_APP_API_URL,
>>>>>>> 2ceded2 (Link)
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
