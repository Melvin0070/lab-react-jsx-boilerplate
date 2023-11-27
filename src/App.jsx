import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
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

function App() {
  // code here
const imgg = imageData();
  return (
    <div className="App">
      <div className="header">
        <h1>Functional Component</h1>
      </div>
      <div className="image-grid">
        {imgg.map((ele) => (
          <img key={ele.id} src={ele.img} alt="" />
        ))}
      </div>
    </div>
  )
}

export default App;