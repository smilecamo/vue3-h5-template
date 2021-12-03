import axios from "axios";
import store from "@/store";
import { Toast } from "vant";
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
});
// 请求拦截
service.interceptors.request.use(
  (config) => {
    if (store.getters.token) {
      config.headers.Authorization = `Bearer ${store.getters.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// 响应拦截
service.interceptors.response.use(
  (response) => {
    const { data, success, message } = response.data;
    // 判断是否请求成功
    if (success) {
      // 返回成功解析后的数据
      return data;
    } else {
      // 失败（请求成功，业务失败
      Toast.error(message);
      return Promise.reject(new Error(message));
    }
  },
  (error) => {
    if (
      error.response &&
      error.response.data &&
      error.response.data.code === 401
    ) {
      // token 过期
      store.dispatch("user/logout");
    }
    Toast.error(error.message);
    return Promise.reject(error);
  }
);
export default service;
