/**
 * Created by limx on 2018/2/24.
 */
import wepy from 'wepy'
import config from './config'

var websocket = {
  open: false,
  connect() {
    wepy.connectSocket({
      url: config.wsUrl
    })

    wepy.onSocketOpen(function (res) {
      console.log(res)
    })
  }
}

export default websocket