import axios, { AxiosInstance } from "axios";

const customAxios: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_CRM,
  headers: {
    authtoken: process.env.NEXT_PUBLIC_TOKEN,
  },
});

export default customAxios;