<template>
  <div class="p-4">
    <form @submit.prevent="submitForm" class="max-w-md mx-auto">
      <div
        :class="{ 'bg-green-100': isNameValid, 'bg-red-100': !isNameValid }"
        class="p-2 rounded-md mb-4"
      >
        <label class="block text-sm font-medium text-gray-700"
          >Nom ContactForComponent.vue :</label
        >
        <input
          type="text"
          v-model="name"
          required
          class="w-full border rounded-md p-2"
        />
      </div>

      <div
        :class="{ 'bg-green-100': isEmailValid, 'bg-red-100': !isEmailValid }"
        class="p-2 rounded-md mb-4"
      >
        <label class="block text-sm font-medium text-gray-700">Email :</label>
        <input
          type="email"
          v-model="email"
          required
          class="w-full border rounded-md p-2"
        />
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700">Sujet :</label>
        <input
          type="text"
          v-model="subject"
          class="w-full border rounded-md p-2"
        />
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700">Message :</label>
        <textarea
          v-model="message"
          required
          class="w-full border rounded-md p-2"
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          @click="formSubmitted = true"
          class="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Envoyer
        </button>
      </div>
    </form>

    <div v-if="formSubmitted" class="mt-8">
      <h2 class="text-lg font-semibold mb-4">Récapitulatif du formulaire :</h2>
      <p><span class="font-semibold">Nom :</span> {{ name }}</p>
      <p><span class="font-semibold">Email :</span> {{ email }}</p>
      <p><span class="font-semibold">Sujet :</span> {{ subject }}</p>
      <p><span class="font-semibold">Message :</span> {{ message }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const name = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");
const isNameValid = ref(true);
const isEmailValid = ref(false);
const formSubmitted = ref(false);

const submitForm = () => {
  // Ajoutez ici la logique pour valider le formulaire
};
</script>
