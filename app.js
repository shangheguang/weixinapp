/**
 * @desc    简单API请求示例
 * @author  shangheguang@yeah.net
 * @date    2017-01-20
 */
const request = require('./utils/request.js')

App({
  
  request: request,

  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },

  /**
   * 定义的接口域名
   */
  apiUrl: 'https://www.kuaidi100.com',

  globalData:{
    userInfo:null
  }

})