import axios, { AxiosInstance } from "axios";

const customAxios: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_CRM,
  headers: {
    authtoken: process.env.NEXT_PUBLIC_TOKEN,
    "Content-Type": "application/json", // Tipo de contenido
    "Accept": "application/json", // Formato aceptado de la respuesta
  },
});

export default customAxios;