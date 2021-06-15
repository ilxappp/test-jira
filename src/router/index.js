import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: () => import('@/pages/Authorization')
		},
		{
			path: '/projects',
			component: () => import('@/pages/Projects.vue')
		}
	]
})