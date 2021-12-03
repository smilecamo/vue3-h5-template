import { createStore } from "vuex";
import { TOKEN } from "@/constant";
import { setItem, getItem } from "utils/storage";
export default createStore({
  state: {
    token: getItem(TOKEN) || "",
    count: 1,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      setItem(TOKEN, token);
    },
    setCount(state, count) {
      state.count = count;
    },
  },
  actions: {},
  getters: {
    token: (state) => state.token,
    count: (state) => state.count,
  },
});
