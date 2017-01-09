<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <test2></test2>
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Test2 from './components/Test2'

export default {
  name: 'app',
  components: {
    Hello,
    Test2
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
