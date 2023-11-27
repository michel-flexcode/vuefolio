<template>
  <table>
    <thead>
      <tr>
        <th>Last Name</th>
        <th>First Name</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(person, index) in people" :key="index">
        <td>{{ person.lastName }}</td>
        <td>{{ person.firstName }}</td>
        <td>{{ person.age }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref } from "vue";

const people = ref([
  { lastName: "Doe", firstName: "John", age: 30 },
  { lastName: "Smith", firstName: "Jane", age: 25 },
  { lastName: "Johnson", firstName: "Bob", age: 35 },
  // Add more people as needed
]);
</script>

<!-- Form to add a new person
  <div v-if="formSubmitted" class="mt-8">
    <form @submit.prevent="addPerson">
      <label for="lastName">Last Name:</label>
      <input v-model="newPerson.lastName" type="text" required />

      <label for="firstName">First Name:</label>
      <input v-model="newPerson.firstName" type="text" required />

      <label for="age">Age:</label>
      <input v-model="newPerson.age" type="number" required />

      <button type="submit">Add Person</button>
    </form>
  </div>
   -->
