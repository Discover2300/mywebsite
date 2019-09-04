import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// TODO Web Template Studio: Add routes for your new pages here.
export default new VueRouter({
  mode: "history",
  routes: [{
    name: "Home",
    path: "/",
    component: () => import ("@/views/Grid.vue")
  }]
});
