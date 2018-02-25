/**
 * Created by limx on 2018/2/25.
 */
import wepy from 'wepy'

var task = {
  getStatusName: function (status) {
    switch (status) {
      case 0:
        return '未开始'
      case 1:
        return '进行中'
      case 2:
        return '延期'
      case 10:
        return '已完成'
      default:
        return '未知'
    }
  },

  setClipboardData: function (items) {
    var result = []
    for (var i in items) {
      var item = items[i]
      var date = item.beginAt.substring(0, 10)
      var detail = item.detail
      if (!result[date]) {
        result[date] = []
      }
      result[date].push(detail)
    }

    var message = ''
    for (var d in result) {
      message += '日期：' + d + '\n'
      for (var j in result[d]) {
        var index = parseInt(j) + 1
        message += '  ' + index + '.' + result[d][j] + '\n'
      }
    }
    wepy.setClipboardData({
      data: message,
      success: function (res) {
        wepy.getClipboardData({
          success: function (res) {
            console.log(res.data) // data
          }
        })
      }
    })
  }
}

export default task