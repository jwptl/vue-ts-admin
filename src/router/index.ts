import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { navApi } from '../api'
import { mainStore } from '../store'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "Login",
    meta: { title: "登录", },
    component: () => import("../views/login.vue"),
  },
  {
    path: "/home",
    name: "Home",
    redirect: "/index",
    component: () => import("../layout/index.vue"),
    children: [
      {
        path: "/index",
        name: "Index",
        meta: { title: "首页", icon: "icon-shouye", hidden: false, role: ['root', 'user'] },
        component: () => import("../views/index.vue"),
      }

    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


//路由拦截
router.beforeEach(async (to, form, next) => {
  if (to.path == '/login') {
    next()
  } else {
    if (mainStore() && mainStore().routes.length == 0) {
      const res = await navApi()
      mainStore().addRoutes(res.data, router)
      next({ path: to.path })
    } else {
      next()
    }
  }

})


export default router
