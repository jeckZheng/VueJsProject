import Vue from 'vue'
import App from './App.vue'
// 引入路由模块
import VueRouter from 'vue-router'
// 引入index组件(首页)
import index from './components/index.vue'
// 引入member组件(会员中兴页)
import member from './components/member.vue'
// 引入car组件(购物车页)
import car from './components/car.vue'
// 使用路由中间件
Vue.use(VueRouter);

// 注册路由规则
const router = new VueRouter({
  routes:[
    {
      path:'/index',
      component:index
    },{
      path:'/member',
      component:member
    },{
      path:'/car',
      component:car
    }
  ]
})

// 引入css
import './assets/statics/site/css/style.css';

Vue.config.productionTip = false

new Vue({
  // 选择器
  el:"#app",
  // 挂载到vue
  router,
  // 渲染 App组件
  render: h => h(App)
})
