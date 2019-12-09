// pages/viewBox/swiper/swiper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: ['swiper-item-text-1', 'swiper-item-text-2', 'swiper-item-text-3'],
    isShowIndicatorDots: true,
    isAutoPlay: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  onHandlerChange(e) {
    // console.log(e);
    if (e.currentTarget.dataset.itemKey === "isShowIndicatorDots") {
      let isShowIndicatorDots = false;
      if (e.detail.value) {
        //
        isShowIndicatorDots = true;
      }
      this.setData({ "isShowIndicatorDots": isShowIndicatorDots });
    } else if (e.currentTarget.dataset.itemKey === "isAutoPlay") {
      let isAutoPlay =false;
      if (e.detail.value) {
        isAutoPlay = true;
      }
      this.setData({ "isAutoPlay": isAutoPlay });
    }
  }
})