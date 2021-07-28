import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import booking from "../views/booking.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: booking,
  },
  {
    path: "/booking",
    name: "booking",
    component : Home ,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
