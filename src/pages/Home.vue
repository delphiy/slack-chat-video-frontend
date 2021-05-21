<template>
  <div class="main">
    <div class="d-flex justify-content-between">
      <h3>Meeting</h3>
      <a href="">
        <img src="https://icons.iconarchive.com/icons/martz90/circle/128/phone-icon.png" alt="" width="40px">
      </a>
    </div>

    <div v-for="i in 5" :key="i">
      <div class="mt-4">
        <img src="https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg"
             class="profile-image rounded-circle"
             alt="profile">

        <div class="message">
            <span class="text-dark small" style="font-weight: bold">
             Husam
            </span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>