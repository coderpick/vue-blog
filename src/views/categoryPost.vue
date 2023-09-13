<script setup>
import { useRoute} from "vue-router";
import {computed, onMounted, ref} from "vue";
import axios from "axios";
const route = useRoute();
const paramId = ref('');

const posts = ref([]);

const fetchPost = async (paramId) => {
  let response = await axios.get(`https://basic-blog.teamrabbil.com/api/post-list/${paramId}`)
  posts.value =response.data;
  console.log(response)
}

onMounted(() => {
  paramId.value = route.params.categoryId; // Store the parameter ID
  fetchPost(route.params.categoryId); // Call the API when the component is mounted
});


</script>

<template>

  <div v-if="posts" class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div v-for="post in posts" :key="post.id" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img class="rounded-t-lg" :src="post.img" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {{ post.title}}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {{ post.short }}
        </p>
        <router-link       
        :to="{ name: 'post', params: { id: post.id } }"
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </router-link>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>