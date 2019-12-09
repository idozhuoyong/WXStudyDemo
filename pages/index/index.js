// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
  },

  // click method
  /**
   * 视图容器点击
   */
  boxTap: function (event) {
    let pageName = event.currentTarget.dataset.pageName;
    wx.navigateTo({
      url: "../../pages/" + pageName + "/index/index"
    })
  },

  /**
   * 
   */
  startLogTap: function() {
    wx.navigateTo({
      url: '../../pages/logs/logs',
    })
  }
})
