import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name:'home',
        component: () => import('../views/HomeView.vue')
    },
    {
        path: "/post/:id",
        name:'post',
        component: () => import('../views/PostShow.vue')
    },

    {
        path: "/category/post/:categoryId",
        name:'category/post',
        component: () => import('../views/categoryPost.vue')
    }
]


export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})