import axios from "axios";

export const apiUrl = import.meta.env.VITE_MECHECKPLUS_API_URL;

const api = axios.create({
  baseURL: apiUrl, 
//   withCredentials: true,
});

export async function fetchSomething() {
  const res = await fetch(`${apiUrl}`);
  return res.json();
}

export default api;
