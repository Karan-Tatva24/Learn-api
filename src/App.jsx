import axios from "axios";
import "./App.css";
// import AxiosEx from "./Component/AxiosEx";
import AxiosPost from "./Component/AxiosPost";
// import FetchAPI from "./Component/FetchAPI";
// import Query from "./Component/Query";
// import SWRmethod from "./Component/SWRmethod";

axios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = "This is from interceptor";
    config.headers.FavColor = "Blue";

    console.log(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const App = () => {
  return <AxiosPost />;
};

export default App;
