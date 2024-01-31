import { defineStore } from "pinia";
import { RouteRecordRaw } from 'vue-router'
const views = import.meta.glob('../views/**/*.vue');
export const mainStore = defineStore('mainStore', {
    state: () => ({
        routes: [] as Array<RouteRecordRaw>
    }),
    actions: {
        addRoutes(data: Array<any>, router: any) {
            data.forEach(m => {
                this.routes.push({
                    path: m.path,
                    name: m.name,
                    title: m.title,
                    component: views[`../views${m.component}.vue`]
                })
            })

            this.routes.forEach(m => router.addRoute('Home',m))
        }
    }
})