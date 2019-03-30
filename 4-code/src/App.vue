<template>
  <div id="app">
    <!-- <coma></coma>
    <comb></comb> -->
    <ul>
      <li><router-link to="/state">02state</router-link></li>
      <li><router-link to="/mutations">03mutations</router-link></li>
      <li><router-link to="/actions">04actions</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
import coma from './components/01一个状态应用多个组件/coma.vue'
import comb from './components/01一个状态应用多个组件/comb.vue'
export default {
  name: 'App',
  components: {
    coma,
    comb
  }
}
</script>

<style>

</style>
