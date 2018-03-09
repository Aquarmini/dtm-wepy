/**
 * Created by limx on 2018/3/9.
 */
import api from '../common/api'

var group = {
  delete(groupId) {
    var params = {
      groupId: groupId
    }
    return api.post('/group/delete', params)
  }
}

export default group