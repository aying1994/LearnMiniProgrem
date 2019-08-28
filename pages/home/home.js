Page({
  data:{
    name:'coderwhy',
    age: 18,
    students: [
      {id:1,name:'kebgi',age:18},
      { id: 1, name: 'zhmus', age: 18 },
      { id: 1, name: 'kuli', age: 18 }
    ],
    counter:0,
    
  },
  handleBtnClick() {
    //错误的做法
    // this.data.counter+=1
    // console.log(this.data.counter)
    this.setData({
      counter:this.data.counter + 1
    })

  },
   handleSubtraction() {
    //错误的做法
    // this.data.counter+=1
    // console.log(this.data.counter)
    this.setData({
      counter: this.data.counter - 1
    })

  }

})