import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/common/Login.vue'
import Home from 'views/Home.vue'
import CreateUser from 'views/CreateUser'
import MainHome from 'views/MainHome'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Login
  }, 
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: "/",
        component: MainHome
      },
      {
        path: 'createUser',
        component: CreateUser,
      }
    ],
  }
  
]

const router = new VueRouter({
  routes
})

export default router
