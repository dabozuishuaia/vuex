<template>
  <div>
      <h1>coma</h1>
      <!-- 输出 vuex 中 store 中的 state 下的 num -->
      <p>{{ this.$store.state.num }}</p>
      <button @click="add">++</button>
  </div>
</template>

<script>
export default {
    methods: {
        add() {
            this.$store.commit('add')
        }
    }
}
</script>

<style>

</style>
