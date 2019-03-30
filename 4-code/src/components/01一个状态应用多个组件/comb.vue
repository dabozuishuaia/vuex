<template>
  <div>
      <h1>comb</h1>
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
