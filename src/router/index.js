import {createRouter,createWebHistory} from 'vue-router'
import NavBar from '../layouts/NavBar.vue'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Course from '../components/Course.vue'
import Service from '../components/Service.vue'

const routes = [
    {
        path: '/mauc/',
        redirect: '/mauc/home',
        name: 'NavBar',
        component: NavBar,
        children:[
            {
                path: '/mauc/home',
                name: 'Home',
                component: Home
            },
            {
                path: '/mauc/about',
                name: 'About',
                component: About
            },
            {
                path: '/mauc/course',
                name: 'Course',
                component: Course
            },
            {
                path: '/mauc/service',
                name: 'Service',
                component: Service
            },

        ]
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})
export default router