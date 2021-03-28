import Vue from 'vue'
import Router from 'vue-router'

 //import adminMaster from './views/About.vue'
 import adminMaster from './views/About.vue'

// import addCategory from './components/admin/category/add_category.vue'
// import allCategories from './components/admin/category/all-categories.vue'
// import editCategory from './components/admin/category/edit_category.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'dashboard',
      component:()=>import('./components/admin/admin-master.vue'),
      children:[
        {
          path:'add-category',
          name:'add-category',
          component:()=>import('./components/admin/category/add_category.vue'),
        },
        {
          path:'all-category',
          name:'all-category',
          component:()=>import('./components/admin/category/all-categories.vue'),
        },
        {
          path:'edit-category/:id',
          name:'edit-category',
          component:()=>import('./components/admin/category/edit_category.vue'),
        }
      ],
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:adminMaster,
    }
  ],
  mode:'history'
})
