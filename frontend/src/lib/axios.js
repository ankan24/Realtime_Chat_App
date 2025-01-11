// import axios from "axios";

// export default axiosInstance = axios.create({
//     baseURL: 'http://localhost:5001/api', // replace with your backend server URL
//     withCredentials: true, // enable cookies for cross-domain requests
// })

import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5001/api', // Replace with your backend server URL
    withCredentials: true, // Enable cookies for cross-domain requests
});

export default axiosInstance;
