// pages/home/home.js
//获取全局getapp
const app = getApp();
console.log(app.globalData.age)
//注册一个页面
//页面也有自己的生命周期
Page({

  handleGeiUserInfo(event){
    console.log(event)
  },
  /**
   * 页面的初始数据
   */
  data: {
    //2............页面数据初始化
    message:123,
    lists:[
      {name:'a',age:10},
      { name: 'b', age: 20}

    ],
    list:[]
  },
//3................监听wxml事件
  handlebuttoclick(){
    console.log("被点击了 ")
  },
//4..............监听其他事件

//监听页面滚动的函数 在文档有函数详细介绍
onPageScroll(obj){
console.log(obj)
},
  //下面是生命周期函数
  /**
   * 1.............生命周期函数--监听页面加载
   * //页面被加载出来的时候
   */



  
  onLoad: function () {
  
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success: (res)=>{
        const data = res
        this.setData({ 
         list: res
       })
      }
    })
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload')
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

  }
})