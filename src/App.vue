<template>
  <div id="app">
    <div class="sidebar">
      <div class="profile text-center p-2">
        <img src="https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg"
             alt="profile" class="rounded-circle profile-image">

        <span class="profile-name text-white small">Husam</span>
      </div>
      
      <ul>
        <li>
          <a href="#"># Meeting</a>
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
    </div>

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

    <div class="chat-box">
      <quill-editor
          class="editor"
          ref="myQuillEditor"
          v-model="data"
          :options="editorOption"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @ready="onEditorReady($event)"
          @change="onEditorChange($event)"
          style="height: 100px"
      >

        <div id="toolbar" slot="toolbar">
          <!-- Add a bold button -->
          <button class="ql-bold">Bold</button>
          <button class="ql-italic">Italic</button>
          <!-- Add font size dropdown -->
          <select class="ql-size">
            <option value="small"></option>
            <!-- Note a missing, thus falsy value, is used to reset to default -->
            <option selected></option>
            <option value="large"></option>
            <option value="huge"></option>
          </select>
          <select class="ql-font">
            <option selected="selected"></option>
            <option value="serif"></option>
            <option value="monospace"></option>
          </select>
          <!-- Add subscript and superscript buttons -->
          <button class="ql-script" value="sub"></button>
          <button class="ql-script" value="super"></button>
          <!-- You can also add your own -->
          <button class="ql-custom-button" @click="customButtonClick">Send</button>

        </div>
      </quill-editor>
    </div>

  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      data: '',
      editorOption: {
        modules: {
          toolbar: "#toolbar",
        }
      },
    }
  }
}
</script>

<style>

</style>
