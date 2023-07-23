<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div>
      <b-button v-b-modal.modal-1>Launch demo modal</b-button>

      <b-modal id="modal-1" title="BootstrapVue">
          <p class="my-4">Hello from modal!</p>
      </b-modal>
    </div>
    <div>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/menu">Menu</router-link></li>
        <router-link tag="li" to="/bar" :event="['mousedown', 'touchstart']">
          <a>Bar</a>
        </router-link>
      </ul>
      <router-view class="view"></router-view>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
