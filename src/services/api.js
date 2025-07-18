import axios from "axios";

const API = axios.create({
  baseURL: "https://new-todobackend.onrender.com/api",
});

// Attach token on every request
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
