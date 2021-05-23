import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import PrivateMessages from '@/components/PrivateMessages'

Vue.use(Router)

let baseRoutes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    }
    ,
    {
        path: '/private-message',
        name: 'PrivateMessages',
        component: PrivateMessages
    }
]

const router = new Router(
    {
        mode: 'history',
        routes: baseRoutes
    }
)

router.beforeEach((to, from, next) => {
    if(to.path != '/login') {
        if(!localStorage.getItem('api_token')) {
            next('login')
        } else {
            next();
        }
    } else {
        next()
    }
})

export default router;