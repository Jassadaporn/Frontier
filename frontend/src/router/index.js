import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/home-view.vue'
import Login from '../views/Login/login-view.vue'
import UserManagement from '../views/User/user-management.vue'
import UserIndex from '../views/User/user-index.vue'
import ClientManagement from '../views/Client/client-management.vue'

const routes = [
  // Home and Login 
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  // User Management
  {
    path: '/user',
    name: 'CreateUser',
    component: UserManagement
  },
  {
    path: '/user/:id',
    name: 'EditUser',
    component: UserManagement,
    props: true
  },
  {
    path: '/UserIndex',
    name: 'UserIndex',
    component: UserIndex
  },

  // Client Master 
  {
    path: '/Client',
    name: 'CreateClient',
    component: ClientManagement
  },
  {
    path: '/Client/:id',
    name: 'EditClient',
    component: ClientManagement,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
