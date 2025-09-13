import axios from "axios";

const axiosInstance=axios.create()

axiosInstance.defaults.baseURL="http://localhost:5180/app"
axiosInstance.defaults.withCredentials=true

export default axiosInstance