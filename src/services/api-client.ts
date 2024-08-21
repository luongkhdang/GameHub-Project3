import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9f6563964bf6456d829d1b6225fad120",
  },
});
