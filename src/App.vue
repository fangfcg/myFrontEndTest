<template>
  <div class="chatall">
    <chat-component></chat-component>
  </div>
  <!-- <group-info></group-info> -->
</template>

<script>

import ChatComponent from './components/ChatComponent'

export default {
  components: {
    ChatComponent
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html {
  height: 100%;
}

body {
  height: 100%;
}
.chatall{
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}

</style>
