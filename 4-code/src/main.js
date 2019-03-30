// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

Vue.use(Vuex)
Vue.config.productionTip = false

// 创建一个 vuex 的 store 对象
var store = new Vuex.Store({
  // 管理状态
  state: {
    num: 1,
    name: 'zs'
  },
  // 修改状态
  mutations: {
    add(state, obj) {
      state.num = state.num + obj.index
    },
    setName(state) {
      state.name = 'ls'
    }
  },
  // 操作逻辑，将结果交给 mutaions
  actions: {
    add(context) {
      // context 上下文对象：可以理解为就是当前 store 实例
      //  state: 当前仓库的 state
      //  commit: 可以调用当仓库中的 mutations 中的方法
      //  dispath: 可以调用当前仓库中的 actions 中的方法
      // console.log(context)
      context.commit({
        type: 'add',
        index: 2
      })
    }
  }
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
