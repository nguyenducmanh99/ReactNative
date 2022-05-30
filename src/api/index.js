import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000, // default is `0` (no timeout)
  responseType: 'json',
});

axiosClient.interceptors.request.use(async config => {
  // Handle token here ...
  // Dinh kem token
  //   const token = storage.getToken();
  //   because not has api => token '';
  const token = '';
  if (token !== null && token !== undefined) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosClient.interceptors.response.use(
  response => {
    if (response && response.data !== undefined) {
      // only get data
      return response.data;
    }

    return response;
  },
  error => {
    console.log(error);
    // Handle errors
    if (error.response) {
      throw error.response;
    } else if (error.request) {
      throw error.request;
    } else {
      throw error;
    }
  },
);

export default axiosClient;
