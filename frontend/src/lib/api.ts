import axios from "axios";
import { useAuthStore } from "@/stores/useAuthStore";

const api = axios.create({
  baseURL: "http://localhost:8000/api", // ← change to your Django backend URL/port
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor - add token if exists
api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Optional: response interceptor for 401 → logout (we'll add later)

export default api;

// Auth API functions
export const loginUser = async (credentials: {
  username: string;
  password: string;
}) => {
  const response = await api.post("/token/", credentials); // adjust endpoint to match your Django JWT setup
  return response.data; // should return { access, refresh, user? }
};

export const registerUser = async (data: {
  username: string;
  email: string;
  password: string;
}) => {
  const response = await api.post("/register/", data); // adjust endpoint
  return response.data;
};

export const getCurrentUser = async () => {
  const response = await api.get("/users/me/");
  return response.data;
};
