import { createRouter, createWebHistory } from "vue-router";
import home from "../views/home.vue";
import signup from "../views/signup.vue";
import signin from "../views/signin.vue";
import profile from "../views/profile.vue";
import PageNotFound from "../components/PageNotFound.vue";

const routes = [
   {
      path: "/",
      name: "home",
      component: home,
   },
   {
      path: "/signup",
      name: "signup",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
         import(/* webpackChunkName: "about" */ "../views/signup.vue"),
   },
   {
      path: "/signin",
      name: "signin",
      component: () =>
         import(/* webpackChunkName: "about" */ "../views/signin.vue"),
   },
   {
      path: "/profile",
      name: "profile",
      component: () =>
         import(/* webpackChunkName: "about" */ "../views/profile.vue"),
   },
   {
      path: "/:pathMatch(.*)*",
      name: "pageNotFound",
      component: PageNotFound,
   },
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
});

export default router;
