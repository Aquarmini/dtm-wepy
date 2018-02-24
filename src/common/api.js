/**
 * Created by limx on 2018/2/24.
 */
import wepy from 'wepy'

var api = {
  baseUrl: 'http://api.dtm.phalcon.xin',
  post: function (route, data) {
    let self = this
    return new Promise((resolve, reject) => {
      var token = wepy.getStorageSync('token')
      var data = {
        url: self.baseUrl + route,
        data: data,
        method: 'POST',
        success: function (response) {
          if (response.statusCode == 200) {
            data = response.data
            if (data.success) {
              resolve(data)
            } else {
              console.log(data)
              if (data.errorCode == 700) {
                wepy.redirectTo({
                  url: 'pages/login'
                })
              }
              reject(data)
            }
          }
        },
        fail: reject
      };
      if (token) {
        data.header = { 'X-DTM-TOKEN': token };
      }
      wepy.request(data);
    })
  }
}

export default api