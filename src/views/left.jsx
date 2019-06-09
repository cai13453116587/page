import React, { Component } from 'react'
import Mock from "mockjs"
import page from "../components/page"
let list=Mock.mock({
    "list|50-100":[{
        title:"@ctitle",
        "id|+1":1
    }]
})

 class Left extends Component {
     state={
         list:list.list,
         listPage:""
     }
  render() {
    return (
      <div>
          <ul>
              {
                  this.props.listPage.map((item,index)=><li key={item.id}>{item.title}</li>)
              }
          </ul>
      </div>
    )
  }
}
export default page(Left);
