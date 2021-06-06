<template>
  <div class="chat-box">
    <quill-editor
        class="editor"
        ref="myQuillEditor"
        v-model="data"
        :options="editorOption"
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
  </div >
</template>

<script>
export default {
  name: "Chatbox",
  data() {
    return {
      data: '',
      editorOption: {
        modules: {
          toolbar: "#toolbar",
        }
      },
    }
  },
  methods: {
    customButtonClick() {

    }
  }
}
</script>

<style scoped>

</style>