var app = getApp()
Page({
  data: {
    imgalist: ['http://xl.tianjiaoedu.org/upload/201607/05/201607051554541730.jpg',
      'http://xl.tianjiaoedu.org/upload/201607/05/201607051554541730.jpg']
  },
	/** 
	 * 预览图片
	 */
  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: this.data.imgalist // 需要预览的图片http链接列表
    })
  }
})