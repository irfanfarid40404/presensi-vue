<script setup>
import { ref, onMounted } from "vue";
import { getUsers } from "./services/api";

const users = ref([]);

onMounted(async () => {
  users.value = await getUsers();
});
</script>

<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="user in users.results" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>