import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/Mypage/Home.vue' 

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:home,
    meta: {
      keepAlive:true
    },
    children:[
      {
        path: '/My',
        component: ()=> import("../components/Mypage/My.vue")
      },
    ]
  },
  {
    path:"/Review",
    component:() => import('../components/Mypage/TestPage/Review.vue'),
    meta: {
      keepAlive:true
    },
  },
  {
    path:'/Exercise',
    component:()=> import('../components/Mypage/TestPage/Exercise.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
