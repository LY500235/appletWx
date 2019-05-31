
Page({
  data: {

    items: [
      {
        "id": "1",
        "imageUrl": "http://xl.tianjiaoedu.org/upload/201607/05/201607051554541730.jpg",
        "content": ""
      },
      {
        "id": "2",
        "imageUrl": "http://xl.tianjiaoedu.org/upload/201607/05/201607051554541730.jpg",
        "content": "抚州校区的西湖"
      },
      {
        "id": "3",
        "imageUrl": "http://xl.tianjiaoedu.org/upload/201607/05/201607051554541730.jpg",
        "content": "新生军训"
      },
      {
        "id": "4",
        "imageUrl": "http://xl.tianjiaoedu.org/upload/201607/05/201607051554541730.jpg",
        "content": "樱花广场"
      },
      {
        "id": "5",
        "imageUrl": "http://xl.tianjiaoedu.org/upload/201607/05/201607051554541730.jpg",
        "content": "校园雪景"
      },
      {
        "id": "6",
        "imageUrl": "http://i1.sinaimg.cn/travel/2014/1021/U8842P704DT20141021103442_1.jpg",
        "content": "校园风光"
      },
      {
        "id": "7",
        "imageUrl": "http://xl.tianjiaoedu.org/upload/201607/05/201607051554541730.jpg",
        "content": "抚州校区夜景"
      },
      {
        "id": "8",
        "imageUrl": "http://upload.ct.youth.cn/2013/0707/1373173834482.jpg",
        "content": "三下乡活动"
      },
      {
        "id": "9",
        "imageUrl": "http://pic.baike.soso.com/p/20130618/20130618153602-1487877646.jpg",
        "content": "国防生风采"
      }
    ],
    imageList:[]

  },

  onLoad: function () {
    console.log("....初始化加载.....");
    for (var i = 0; i < this.data.items.length; ++i){
      var item = this.data.items[i];
      this.data.imageList.push(item.imageUrl);
    }
  },

  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },

  /** 
	 * 预览图片
	 */
  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: this.data.imageList // 需要预览的图片http链接列表
    })
  }
})