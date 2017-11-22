// import io from 'socket.io-client'
var msgId = 0
// below are some msg content for test.
var msgType = [2, 0, 1, 0, 1]
var msgName = ['fcg', 'a', 'fcg', 'a', 'fcg']
var msgContent = ['fcg为您服务', 'hello', '1', '2', 'hello']

var Chat = {
  msgList: [],
  userName: 1,
  userId: null,
  socket: null,
  // 让浏览器滚动条保持在最低部
  scrollToBottom: function () {
    // window.scrollTo(0, 900000);
  },
  createMsg: function () {
    msgId++
    return {
      type: 0, // 0: self 1: other 2: system
      msg: null,
      name: null,
      color: null,
      key: msgId
    }
  }
}

for (var i = 0; i < 5; i++) {
  var msg = Chat.createMsg()
  msg.type = msgType[i]
  msg.name = msgName[i]
  msg.msg = msgContent[i]
  Chat.msgList.push(msg)
}
/*
function createMsg () {
  msgId++
  return {
    type: 0, // 0: self 1: other 2: system
    msg: null,
    name: null,
    color: null,
    key: msgId
  }
}
*/
export default Chat
