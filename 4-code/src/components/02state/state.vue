<template>
    <div>
        <h1>state</h1>
        <!-- 使用 state -->
        <h4>方式1：直接通过 this.$store.state.num 来得到</h4>
        {{ this.$store.state.num }}
        <h4>方式2：通过 mapState 辅助函数来得到</h4>
        {{ num }} {{ name }}
        <h4>方式3：通过 mapState 辅助函数来得到，不完全占用计算属性(将内容映射为对象)</h4>
        {{ num }} {{ name }} {{ mycom }}
        <h4>方式4：通过 mapState 辅助函数来得到，不完全占用计算属性(将内容映射为数组)</h4>
        {{ num }} {{ name }}  {{mycom}}
    </div>
</template>

<script>
// 引入这个 mapState 辅助函数来获取
import { mapState } from 'vuex'
export default {
    // 方式二：
    // computed: mapState({
    //     num: function(state) {
    //         return state.num
    //     },
    //     name: function(state) {
    //         return state.name
    //     }
    // })
    // // 方式三：
    // computed: {
    //     mycom: function() {
    //         return 'mycom'
    //     },
    //     // 将 store 中的 state 中的属性进行映射
    //     ...mapState({
    //         num1: function(state) {
    //             return state.num
    //         },
    //         name: state => state.name
    //     })   
    // }
    // 方式四：
    computed: {
        mycom: () => 'mycom',
        ...mapState([
            'num',
            'name'
        ])
    }
}
</script>

<style>

</style>
