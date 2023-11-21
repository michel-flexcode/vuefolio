<script setup>
import ButtonStandardMail from "../components/ButtonStandardMail.vue";
</script>

<template>
  <NavBar />
  <section>
    <div class="grid grid-cols-2 gap-8 p-8">
      <div>
        <h1 class="text-4xl font-bold mb-4">
          Hello, je m'appelle Michel Flexcode
        </h1>
        <p>
          Je suis étudiant en webdev à l'IFOSUP Wavre, je développe des projets
          en front et back end
        </p>
        <p>Mes stacks principales sont Vuejs, Laravel, Wordpress</p>
        <p>
          En tant que développeur j'ai aussi des compétences annexes : création
          de base de données, mise en ligne de projets...
        </p>

        <h2>Pour plus d'informations envoyez-moi un mail !</h2>
        <ButtonStandardMail />
      </div>

      <div>
        <!-- Add your image here -->
        <img
          src="../assets/logo.svg"
          alt="Your Image"
          class="w-full h-auto border border-black"
        />
      </div>
    </div>
  </section>
</template>
