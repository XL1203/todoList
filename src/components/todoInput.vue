<template>
  <div class="add_row">
    <input
      type="text"
      placeholder="请输入待办事项"
      class="ipt"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @keyup.enter="$emit('add-item')"
    />
    <el-button type="primary" size="mini" @click="$emit('add-item')"
      >添加</el-button
    >
  </div>
</template>

<script>
export default {
  props: ['value']
}
</script>

<style lang="scss" scoped>
.add_row {
  padding: 10px 0;
  .ipt {
    display: inline-block;
    width: 80%;
    height: 30px;
    outline: none;
    padding-left: 10px;
    font-size: 18px;
  }
  .el-button {
    float: right;
  }
}
</style>
