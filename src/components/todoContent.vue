<template>
  <div class="box">
    <div>
      <input
        type="checkbox"
        :checked="checked"
        @change="$emit('select-all')"
      />全选
    </div>
    <ul v-if="list.length">
      <li v-for="item in list" :key="item.id">
        <input
          type="checkbox"
          :checked="item.done"
          @change="$emit('select-one', item.id)"
        />
        <span
          >{{ item.content }} <em>{{ getDate() |dateTime }}</em></span
        >
        <el-button type="danger" size="mini" @click="$emit('del-item', item.id)"
          >删除</el-button
        >
      </li>
    </ul>
    <p class="msg" v-else>Nothing To Do</p>
  </div>
</template>

<script>
export default {
  props: ['list', 'checked'],
  data() {
    return {
      date: ''
    }
  },
  methods: {
    getDate() {
      return new Date().toLocaleString()
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  margin-top: 5px;
  input {
    margin-right: 10px;
  }
  ul {
    li {
      position: relative;
      line-height: 2;
      font-size: 18px;
      border-bottom: 1px solid #eee;
      color: #333;
      span{
        em{
          position: absolute;
          top: 0;
          right: 70px;
          font-style: normal;
        }
      }
      .el-button {
        position: absolute;
        top: 4px;
        right: 0;
      }
    }
  }

  .msg {
    text-align: center;
    height: 30px;
    line-height: 30px;
    font-size: 22px;
    color: #ccc;
  }
}
</style>
