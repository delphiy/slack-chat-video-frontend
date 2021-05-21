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
        <li>
          <router-link to="/home">
            # Meeting
          </router-link>
        </li>
        <li>
          <a href="#"># Dev</a>
        </li>
        <li>
          <a href="#"># Dev</a>
        </li>
        <li>
          <a href="#"># Dev</a>
        </li>
      </ul>
    </section>

    <section>
      <div class="text-center text-secondary mt-5">
        <span>#Peoples</span>
      </div>

      <ul class="mt-0 pt-0">
        <li>
          <router-link to="/private-message">
            # Husam
          </router-link>
        </li>
        <li>
          <a href="#"># James</a>
        </li>
        <li>
          <a href="#"># Sara</a>
        </li>
      </ul>

    </section>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
}
</script>

<style scoped>

</style>