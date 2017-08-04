//导入模块
import Vue from "vue"
import vueRouter from 'vue-router'

//导入入口文件
import App from './App.vue'


vueRouter.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}
//在vue中加载vueRouter
Vue.use(vueRouter);


//路由配置及模块的导入
import PageTransition from './components/PageTransition/PageTransition.vue'
import Home from './components/Home/Home.vue'
import list from './components/List/List.vue'
import info from './components/List/info.vue'
let router = new vueRouter({
	routes: [
    {
      path: '/',
      name: 'PageTransition',
      component: PageTransition,
      children: [{
        path: '',
        component: Home
      },{
        path: '/Home',
        component: Home
      }, {
        path: '/list',
        component: list
      }, {
        path: '/list/info',
        component: info
      }]
    }
  ]
})

//创建vue实例对象
new Vue({
	el:'#app',
	router,
	render:c=>c(App)
})
