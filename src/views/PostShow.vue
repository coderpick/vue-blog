<script setup>
import { useRoute} from "vue-router";
import {onMounted, ref } from "vue";
import axios from "axios";
const route = useRoute();
const paramId = ref('');

const post = ref({});

const fetchPost = async (paramId) => {
  let response = await axios.get(`https://basic-blog.teamrabbil.com/api/post-details/${paramId}`)
  post.value =response.data.postDetails;
  console.log(response)
}
onMounted(() => {
  paramId.value = route.params.id; // Store the parameter ID
  fetchPost(route.params.id); // Call the API when the component is mounted
});
console.log(post)
</script>

<template>

  <div class="w-full mx-auto" v-if="post">
    <img class="rounded-t-lg" :src="post.img" alt="" />
    <h1 class="my-4 text-3xl font-semibold text-gray-600">{{ post.title }}</h1>
    <p class="text-gray-500 text-xl">
      {{ post.content}}
    </p>
  </div>
  <div v-else class="w-full mx-auto">
    <h1 class="my-4 text-3xl font-semibold text-gray-600">No data found(:</h1>
  </div>


</template>

<style scoped>

</style>