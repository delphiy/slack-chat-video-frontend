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
  mounted () {
    this.listen()
  },
  methods: {
    listen() {
      window.Echo.join('chat').joining((user) => {
        //TODO Call online api
        console.log(user)
      }).leaving((user) => {
        //TODO Call offline api
        console.log(user)
      }).listen('UserOnline', (user) => {
        //TODO Call UserOnline api
        console.log(user)
      }).listen('UserOffline', (user) => {
        //TODO Call UserOffline api
        console.log(user)
      })
    }
  }
}
</script>

<style>

</style>
