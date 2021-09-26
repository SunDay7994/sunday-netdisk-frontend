import Files from '../views/Files'
import {createRouter, createWebHashHistory} from 'vue-router'


const routes = [
    {
        path: '/',
        name: 'Files',
        component: Files,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router