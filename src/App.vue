<script setup>

import Navbar from "./components/Navbar.vue";
import PostList from "./views/HomeView.vue";



</script>

<template>
  <div>
    <Navbar/>
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <router-view :key="$route.fullPath"></router-view>
    </div>
  </div>

</template>

<style scoped>

</style>
