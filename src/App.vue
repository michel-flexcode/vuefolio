<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import FooterBar from "./components/FooterBar.vue";
import ButtonStandardMail from "./components/ButtonStandardMail.vue";
</script>

<template>
  <NavBar />
  <RouterView />
  <FooterBar />
</template>
