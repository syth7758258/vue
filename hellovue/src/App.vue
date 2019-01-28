<template>
  <div id="ge">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <abc  />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import abc from './page/abc.vue'

export default {
  name: 'ge',
  components: {
    HelloWorld,
    abc
  }
}
</script>

<style>
#ge {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
