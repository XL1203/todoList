<template>
  <div id="app">
    <h1>Todos</h1>
    <todoList />
  </div>
</template>

<script>
import todoList from '@/components/todoList'

export default {
  components: {
    todoList
  }
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
ul {
  list-style: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 500px;
  margin: 50px auto;
  color: #2c3e50;

  h1 {
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background-color: #ccc;
  }
}
</style>
