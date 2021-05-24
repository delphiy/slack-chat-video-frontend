<template>
  <div class="sidebar">
    <div class="profile text-center p-2">
      <img src="https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg"
           alt="profile" class="rounded-circle profile-image">

      <span class="profile-name text-white small">Husam</span>
    </div>
    <section>
      <div class="text-center text-secondary mt-5">
        <span>#Channels</span>
      </div>
      <ul class="mt-0 pt-0">
        <li v-for="room in rooms" :key="room.id">
          <router-link to="/home">
            # {{room.name }}
          </router-link>
        </li>
      </ul>
    </section>

    <section>
      <div class="text-center text-secondary mt-5">
        <span>#Peoples</span>
      </div>

      <ul class="mt-0 pt-0">
        <li v-for="user in users" :key="user.id">
          <router-link to="/private-message">
            # {{ user.name }}
          </router-link>
        </li>
      </ul>

    </section>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      rooms: [],
      users: []
    }
  },
  async mounted() {
    let data = await this.$apiService.fetchRoomsWithUsers()
    this.rooms = data.rooms;
    this.users = data.users;
  }
}
</script>

<style scoped>

</style>