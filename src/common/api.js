/**
 * Created by limx on 2018/2/24.
 */
import wepy from 'wepy'

var api = {
  baseUrl: 'http://api.dtm.phalcon.xin',
  post: function (route, data) {
    let self = this
    return new Promise((resolve, reject) => {
      var app = getApp();

      var data = {
        url: self.baseUrl + route,
        data: data,
        method: 'POST',
        success: resolve,
        fail: reject
      };
      console.log(app)
      // if (app.globalData.token) {
      //   data.header = { 'X-DTM-TOKEN': app.globalData.token };
      // }

      wepy.request(data);
    })
  }
}

export default api