import App from "@/App.vue";
import BootstrapVue from "bootstrap-vue";
import router from "@/router";
import Vue from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import VueParticles from 'vue-particles';


Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueParticles);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
