import { createApp } from "vue";
import "@vant/touch-emulator";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "styles/index.scss";
createApp(App).use(store).use(router).mount("#app");
