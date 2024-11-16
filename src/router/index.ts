import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import PrivacyPolicy from "@/pages/PrivacyPolicy.vue";
import Artillery from "@/pages/Artillery.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/privacy-policy", component: PrivacyPolicy },
  { path: "/artillery", component: Artillery },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
