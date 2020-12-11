<template>
  <div class="todo">
    <todoInput
      :value="inputContent"
      @input="handleInputString"
      @add-item="add"
    />
    <todoContent
      :list="getInfoList"
      :checked="checked"
      @select-all="checkAll"
      @select-one="checkOne"
      @del-item="del"
    />
    <todoFooter
      :count="getUndone"
      :viewParam="viewParam"
      @clear="clearComplate"
      @change-status="changeStatus"
    />
  </div>
</template>

<script>
import todoInput from './todoInput'
import todoContent from './todoContent'
import todoFooter from './todoFooter'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  components: {
    todoInput,
    todoContent,
    todoFooter
  },
  created() {
    this.getList()
    // this.$store.dispatch('getList')
  },
  computed: {
    ...mapState(['inputContent', 'checked', 'viewParam']),
    ...mapGetters(['getUndone', 'getInfoList'])
  },
  methods: {
    ...mapMutations([
      'handleInput',
      'addItem',
      'selectAll',
      'selectOne',
      'delItem',
      'clearAllComplate',
      'changeBtn'
    ]),
    ...mapActions(['getList']),
    handleInputString(val) {
      this.handleInput(val)
      // this.$store.commit('handleInput', val)
    },
    add() {
      this.addItem()
      // this.$store.commit('addItem')
    },
    checkAll() {
      this.selectAll()
      // this.$store.commit('selectAll')
    },
    checkOne(id) {
      this.selectOne(id)
      // this.$store.commit('selectOne', id)
    },
    del(id) {
      this.delItem(id)
      // this.$store.commit('delItem', id)
    },
    clearComplate() {
      this.clearAllComplate()
      // this.$store.commit('clearAllComplate')
    },
    changeStatus(param) {
      this.changeBtn(param)
      // this.$store.commit('changeBtn', param)
    }
  }
}
</script>

<style lang="scss" scoped>
.todo {
  width: 100%;
  height: 400px;
}
</style>
