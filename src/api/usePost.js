import { ref } from "vue";
import axios from "axios";
export  default function usePosts(id){
  const categories = ref([]);
  const posts = ref([]);
  const post = ref({});

  const fetchPosts = async () => {
    let response = await axios.get('https://basic-blog.teamrabbil.com/api/post-newest')
    posts.value = response.data;
  };
  const fetchPost = async (id) => {
    let response = await axios.get(`https://basic-blog.teamrabbil.com/api/post-list/${id}`)
    post.value = response.data.data;
  }


const fetchCategory = async () => {
  let response = await axios.get('https://basic-blog.teamrabbil.com/api/post-categories')
  categories.value = response.data;
};
  return{
    posts,
    post,
    fetchPosts,
    fetchPost,
    categories
  }
}