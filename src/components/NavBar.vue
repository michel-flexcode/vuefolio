<template>
  <!-- Test des hovers sur "/" -->

  <nav class="bg-blue-500 p-4 flex items-center justify-center">
    <router-link to="/" class="text-white mx-4 hover:bg-sky-700"
      >Home</router-link
    >
    <router-link to="/about" class="text-white mx-4">About</router-link>
    <router-link to="/project" class="text-white mx-4">Projets</router-link>
    <router-link to="/contact" class="text-white mx-4">Contact</router-link>
    <router-link to="/tableau" class="text-white mx-4">Tableau</router-link>
  </nav>
</template>
