import { defineConfig } from 'umi'

export default defineConfig({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: 'home', title: '首页' },
    { path: '/todo', component: 'todo', title: '待做' },
    { path: '/message', component: 'message', title: '消息' },
    { path: '/account', component: 'account', title: '我的' },
  ],
  npmClient: 'npm',
})
