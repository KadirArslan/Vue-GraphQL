import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import PublicRoutes from "./Public";
import AuthRoutes from "./Auth";
import DashboardRoutes from "./Dashboard";

Vue.use(VueRouter);

const routes = [...PublicRoutes, AuthRoutes, DashboardRoutes];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters["Auth/isAuth"];
  if (to.matched.some((rec) => rec.meta.requiresAuth)) {
    if (!isLoggedIn) {
      store.dispatch("Auth/logoutUser");
      next({
        path: "/auth/login",
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      next();
    }
  } else if (to.matched.some((rec) => rec.meta.requiresGuest)) {
    if (isLoggedIn) {
      next({
        path: "/dashboard",
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
