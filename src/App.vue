<template>
  <div class="chat">
    <chat-body></chat-body>
  </div>
  <!-- <group-info></group-info> -->
</template>

<script>

import ChatBody from './components/ChatBody'

export default {
  components: {
    ChatBody
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
.chat{
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}

</style>
