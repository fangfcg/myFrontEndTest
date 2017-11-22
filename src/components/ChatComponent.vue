<template>
  <div class="chatbox">
    <chat-body :chatobj="chatobj"></chat-body>
    <chat-input v-on:sendMsg="sendMsg"></chat-input>
  </div>
  <!-- <group-info></group-info> -->
</template>

<script>

import ChatBody from './ChatBody'
import ChatInput from './ChatInput'
import Chat from '../api/client'

export default {
  data () {
    return {
      chatobj: Chat
    }
  },
  components: {
    ChatBody,
    ChatInput
  },
  methods: {
    sendMsg: function (newMsg) {
      console.log(newMsg)
      var msgObj = Chat.createMsg()
      msgObj.name = Chat.userName
      msgObj.msg = newMsg
      msgObj.type = 0
      Chat.msgList.push(msgObj)
    }
  },
  created () {
    console.log(11112)
    console.log(this.chatobj.userName)
    console.log(Chat.msgList[0])
  }
}
</script>

<style lang='less'>
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
.chatbox{
  width: 600px;
  //display: flex;
  //flex-direction: column;
  height: 100%;
  justify-content: space-between;
}

chat-input {
  float: top;

}
</style>
