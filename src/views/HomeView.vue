<script setup>
import { ref,onMounted} from "vue";
import axios from "axios";
const posts = ref([]);
const post = ref({});

const fetchPosts = async () => {
  let response = await axios.get('https://basic-blog.teamrabbil.com/api/post-newest')
  posts.value = response.data;
};


onMounted(fetchPosts);

</script>

<template>
  <div>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">

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
          <router-link :to="{path:`post/${post.id}`}" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </router-link>
        </div>
      </div>

    </div>

    <!--    <article class="prose lg:prose-xl">-->
    <!--      <h1>Garlic bread with cheese: What the science tells us</h1>-->
    <!--      <p>-->
    <!--        For years parents have espoused the health benefits of eating garlic bread with cheese to their-->
    <!--        children, with the food earning such an iconic status in our culture that kids will often dress-->
    <!--        up as warm, cheesy loaf for Halloween.-->
    <!--      </p>-->
    <!--      <p>-->
    <!--        But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases-->
    <!--        springing up around the country.-->
    <!--      </p>-->
    <!--      &lt;!&ndash; ... &ndash;&gt;-->
    <!--    </article>-->
  </div>
</template>

<style scoped>

</style>