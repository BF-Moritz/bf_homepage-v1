import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		component: About
	}
	// {
	// 	path: '/videos',
	// 	name: 'Videos',
	// 	component: Videos
	// },
	// {
	// 	path: '/video/:id',
	// 	name: 'VideoByID',
	// 	component: Video
	// },
	// {
	// 	path: '/gear',
	// 	name: 'Gear',
	// 	component: Gear
	// },
	// {
	// 	path: '/contact',
	// 	name: 'Contact',
	// 	component: Contact
	// }
];

const router = new VueRouter({
	routes
});

export default router;
