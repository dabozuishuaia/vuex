import Vue from 'vue'
import Router from 'vue-router'
import State from '../components/02state/state.vue'
import mutations from '../components/03mutations/mutations.vue'
import actions from '../components/04actions/actions.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/state', component: State },
    { path: '/mutations', component: mutations },
    { path: '/actions', component: actions },
  ]
})
