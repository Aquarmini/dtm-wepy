/**
 * Created by limx on 2018/2/24.
 */
import wepy from 'wepy'

var api = {
  // baseUrl: 'http://api.dtm.phalcon.xin',
  baseUrl: 'http://body-building.phalcon.lmx0536.cn',

  post: function (route, params) {
    let self = this
    return new Promise((resolve, reject) => {
      var token = wepy.getStorageSync('token')
      console.log(token)
      var data = {
        url: self.baseUrl + route,
        data: params,
        method: 'POST',
        success: function (response) {
          if (response.statusCode == 200) {
            data = response.data
            console.log(data)
            if (data.success) {
              resolve(data)
            } else {
              if (data.errorCode == 700) {
                wepy.redirectTo({
                  url: '/pages/login'
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