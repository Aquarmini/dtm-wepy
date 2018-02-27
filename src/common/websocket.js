/**
 * Created by limx on 2018/2/24.
 */
import wepy from 'wepy'
import config from './config'

var websocket = {
  // 是否连接上Websocket
  open: false,
  // 发送消息的缓冲区
  messages: [],

  connect() {
    let self = this
    wepy.connectSocket({
      url: config.wsUrl
    })

    wepy.onSocketOpen(function (res) {
      self.open = true
      var message
      while (message = self.messages.pop()) {
        self.send(message)
      }
    })

    wepy.onSocketMessage(function (res) {
      console.log('收到聊天服务器内容：', res.data)
    })
  },

  send(message) {
    if (this.open) {
      console.log('发送给聊天服务器的数据', message)
      wepy.sendSocketMessage({
        data: JSON.stringify(message)
      })
    } else {
      this.messages.push(message)
    }
  }
}

export default websocket