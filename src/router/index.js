import { createRouter, createWebHistory } from "vue-router";
export const privateRoutes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("views/Home"),
    meta: {
      title: "首页",
      keepAlive: true,
      isAuth: true,
    },
  },
];
const publicRoutes = [
  {
    path: "/login",
    meta: {
      title: "登录",
      keepAlive: false,
      isAuth: false,
    },
    component: () => import("views/login/index"),
  },
  {
    path: "/404",
    name: "404",
    meta: {
      title: "404",
    },
    component: () => import("views/error-page/404"),
  },
  // 401
  {
    path: "/401",
    name: "401",
    meta: {
      title: "401",
    },
    component: () => import("@/views/error-page/401"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes: [...privateRoutes, ...publicRoutes],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
// 改变title
router.afterEach((to) => {
  console.log(to);
  window.document.title = to.meta.title ? to.meta.title : "";
});

export default router;
