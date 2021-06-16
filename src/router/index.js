import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: () => import('@/pages/Authorization.vue')
		},
		{
			path: '/projects',
			component: () => import('@/pages/Projects.vue')
		},
		{
			path: '/recovery',
			component: () => import('@/pages/Recovery.vue')
		}
	]
})