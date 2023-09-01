<script setup>
import { useRoute} from "vue-router";
import {onMounted, ref } from "vue";
import axios from "axios";
const route = useRoute();
const paramId = ref('');

const post = ref({});

const fetchPost = async (paramId) => {
  let response = await axios.get(`https://basic-blog.teamrabbil.com/api/post-details/${paramId}`)
  post.value =response.data;
  console.log(response)
}
onMounted(() => {
  paramId.value = route.params.id; // Store the parameter ID
  fetchPost(route.params.id); // Call the API when the component is mounted
});

console.log(post.postDetails)
</script>

<template>


  <div class="w-full mx-auto">
<!--    {{ post }}-->
    <img class="rounded-t-lg" :src="post.img" alt="" />
    <h1>{{ post.title}}</h1>
    <p>
      For years parents have espoused the health benefits of eating garlic bread with cheese to their
      children, with the food earning such an iconic status in our culture that kids will often dress
      up as warm, cheesy loaf for Halloween.
    </p>
    <p>
      But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
      springing up around the country.
    </p>
    <!-- ... -->

  </div>


</template>

<style scoped>

</style>