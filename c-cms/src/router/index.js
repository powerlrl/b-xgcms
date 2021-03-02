import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/common/Login.vue'
import Home from 'views/Home.vue'
import MainHome from 'views/MainHome'
import CreateUser from 'views/CreateUser'
import WzCategory from 'views/wz/WzCategory'
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
      },
      {
        path: 'wzCategory',
        component: WzCategory
      },
    ],
  }
  
]

const router = new VueRouter({
  routes
})

export default router
