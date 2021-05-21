<template>
  <div id="app">
    <sidebar v-if="this.$route.name != 'Login'"/>
    <router-view/>
    <chatbox v-if="this.$route.name != 'Login'"/>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import Chatbox from './components/Chatbox'

export default {
  components: {
    Sidebar,
    Chatbox
  },
  name: 'App',
}
</script>

<style>

</style>
