
import axios from 'axios'
export const http = axios.create({
  baseUrl: "https://localhost:8888.com/api/",
  timeout: 100,
})