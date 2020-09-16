
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'book', component: () => import('pages/Book.vue') },
      { path: 'radio', component: () => import('pages/Radio.vue') },
      { path: 'group', component: () => import('pages/Group.vue') },
      { path: 'mine', component: () => import('pages/Mine.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
