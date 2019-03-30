<template>
  <div>
      <h1>mutations</h1>
      <h4>方式1： 直接通过 commit 来调用 mutations 中的方法</h4>
      {{ this.$store.commit('setName') }} <br/>
      {{ name }}
      <h4>方式二：直接通过 mapMutations 辅助函数来调用</h4>
      {{ num }} <button @click="add(11)">++</button>
      <h3>载荷</h3>
      <h4>方式一：直接传入参数</h4>
      {{ num }} <button @click="add(11)">++</button>
      <h4>方式二：自定义方法来调用：参数就可以以对象的形式传递</h4>
      {{ num }} <button @click="myAdd">++</button>
       
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState([
      'name',
      'num'
    ])
  },
  // 映射 store 中的属性：mutations 
  methods: {
    ...mapMutations({
      add: 'add'
    }),
    ...mapMutations([
      'setName'
    ]),
    myAdd() {
      // 调用 mutaions 中的方法：
      // this.$store.commit('add', 10)
      // this.$store.commit('add', {
      //   index: 10
      // })
      this.$store.commit({
        type: 'add',
        index: 10
      })
    }
  }
}
</script>

<style>

</style>
