const routes = [
  {
    path: '/',
    component: import('@views/Home.vue'),
    // redirect: '/home',
  },
  { path: '/home', component: import('@views/Home.vue') },
  { path: '/about', component: import('@views/About.vue') },
  { path: '/form', component: import('@views/Form.vue') },
  { path: '/list', component: import('@views/List.vue') },
]
export default routes
