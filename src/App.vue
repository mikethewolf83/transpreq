<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Default</RouterLink> | 
        <RouterLink to="/requests">Requests</RouterLink> |
        <RouterLink to="/requests/add">Add Request</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
