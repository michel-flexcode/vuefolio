import "./style.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");

// const routes = {
//     path: "/projetcs/:id", component
// }

// ailleurs
// <script setup
// defineProps(id);
// </script>
// template
// div {{id}}</div>
// /template
