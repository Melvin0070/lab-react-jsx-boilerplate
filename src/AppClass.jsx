import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  // code here

render(){
  const imgg = this.imageData();

  return (

    <div className="App">
      <div className="header">
        <h1>Kalvium Gallary</h1>
      </div>
      <div className="image-grid">
        {imgg.map((ele) => (
          <img key={ele.id} src={ele.img} alt="" />
        ))}
      </div>
    </div>

  )
}
}