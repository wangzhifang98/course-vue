import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import Admin from "./views/Admin.vue";
import Welcome from "./views/admin/Welcome.vue";
import Chapter from "./views/admin/Chapter.vue";

Vue.use(Router);
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      redirect: "/login",
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/",
      name: "admin",
      component: Admin,
      children: [{
        name: "welcome",
        path: "welcome",
        component: Welcome,
      },{
        name: "business/chapter",
        path: "business/chapter",
        component: Chapter,
      }]
    }
  ],
});
