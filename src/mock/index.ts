import { MockMethod } from "vite-plugin-mock"

const mock: Array<MockMethod> = [
    {
        // 接口路径
        url: '/api/login',

        // 接口方法
        method: 'get',

        // 返回数据
        response: () => {
            return {
                status: 200,
                message: 'success',
                data: {
                    username: '123',
                    token: 'SDFSHHDGJGHJASDASDAD'
                }
            }
        }
    },
    {
        url: '/api/routes',
        method: 'get',
        response: () => {
            // 路由
            const routes = [
                {
                    mid:1,
                    name:'index',
                    title:'首页',
                    path:'/index',
                    component:'/index'
                },
                {
                    mid:2,
                    name:'system',
                    title:'系统设置',
                    path:'/system',
                    component:'/system/index'
                },
                {
                    mid:3,
                    name:'user',
                    title:'用户管理',
                    path:'/user',
                    component:'/user/index'
                }
            ]
            return {
                status: 200,
                message: 'success',
                data: routes
            }
        }
    }
]

export default mock