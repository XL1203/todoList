<template>
  <div class="footer">
    <div class="lf">
      <span>{{ count }} 剩余</span>
    </div>
    <div class="md">
      <el-button
        :type="viewParam === 'all' ? 'primary' : ''"
        size="mini"
        @click="$emit('change-status', 'all')"
        >All</el-button
      >
      <el-button
        :type="viewParam === 'active' ? 'primary' : ''"
        size="mini"
        @click="$emit('change-status', 'active')"
        >active</el-button
      >
      <el-button
        :type="viewParam === 'complate' ? 'primary' : ''"
        size="mini"
        @click="$emit('change-status', 'complate')"
        >complated</el-button
      >
    </div>
    <div class="rf">
      <el-button type="danger" plain size="mini" @click="$emit('clear')">clearAllComplated</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['count', 'viewParam']
}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  background-color: #ccc;

  div {
    float: left;
  }

  .lf {
    margin-left: 8px;
  }

  .md {
    margin: 0 40px;
    .el-button{
      margin-left: 5px;
    }
  }

  .rf {
    a {
      text-decoration: none;
      color: #0f0f0f;
    }
  }
  &::afte {
    content: '';
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
}
</style>
