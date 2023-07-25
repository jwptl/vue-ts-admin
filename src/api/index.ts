import request from '../utils/request'


export const loginApi = () => request({ url: '/api/login', method: 'get' })


export const navApi = () => request({ url: '/api/routes', method: 'get' })