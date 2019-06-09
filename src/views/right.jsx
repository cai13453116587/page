import React, { Component } from 'react'
import Mock from "mockjs"
import page from "../components/page"
let list=Mock.mock({
    "list|20":[{
        title:"@ctitle",
        "id|+1":1
    }]
})

 class Right extends Component {
     state={
         list:list.list,
         listPage:""
     }
  render() {
     let {list} = this.state;
    return (
      <div>
          <ul>
              {
                  list.map((item,index)=><li key={item.id}>{item.title}</li>)
              }
          </ul>
      </div>
    )
  }
}
export default Right;