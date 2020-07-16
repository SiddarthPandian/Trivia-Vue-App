import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import VueRouter from "vue-router";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import Home from "./components/Home.vue";

Vue.use(BootstrapVue);
Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    // dynamic segments start with a colon
    { path: "/app/:type/:id/:difficulty", component: App },
  ],
});

new Vue({
  render: (h) => h(Home),
  router,
}).$mount("#app");
