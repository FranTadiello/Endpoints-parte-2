import axios from "axios";

export const client = axios.create({
  baseURL: "https://swapi.py4e.com/api/",
  timeout: 5000,
  params: { format: "json" },
});
