import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5000", // Flask server URL
});

export default instance;
