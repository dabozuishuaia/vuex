<template>
  <div>
      <h1>actions</h1>
      <h4>方式一：直接 this.$store.dispatch('add')</h4>
      <button @click="myad">点我</button> {{num}}
      <h4>方式二：直接使用 mapActions 辅助函数来调用</h4>
      <button @click="add">点我</button> {{num}}
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    computed: {
        ...mapState([
            'num'
        ])
    },
    methods: {
        myad() {
            this.$store.dispatch('add') 
        },
        ...mapActions([
            'add'
        ])
    },
}
</script>

<style>
</style>
