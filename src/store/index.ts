import { defineStore } from "pinia";
const views = import.meta.glob('../views/**/*.vue');
export const mainStore = defineStore('mainStore', {
    state: () => ({
        routes: [] as Array<any>
    }),
    actions: {
        addRoutes(data: Array<any>, router: any) {
            data.forEach((m:any)=> {
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