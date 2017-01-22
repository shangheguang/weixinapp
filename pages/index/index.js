var app = getApp()

Page({
  /**
   * 存储页面数据
   */
  data: {
      expressData : {},
  },
  /**
   * 接口调用成功处理
   */
  successFun: function(res, selfObj) {
      selfObj.setData({
          expressData : res,
      })
  },
  /**
   * 接口调用失败处理
   */
  failFun: function(res, selfObj) {
      console.log('failFun', res)
  },
  /**
   * 页面加载时初始化数据
   */
  onLoad: function() {
      var url     = app.apiUrl+'/query'
      var params  = {
          type   : 'zhongtong',
          postid : '424621263550',
      }
      //@todo 网络请求API数据
      app.request.requestGetApi(url, params, this, this.successFun, this.failFun)
  }
})
