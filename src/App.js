import Nav from "./Components/pages/Nav";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SingleItem from "./Components/pages/SingleProduct";
import Firstprj from "./Components/pages/firstPg";
import { useState } from "react";

function App() {
  const [productID,setproductID]=useState([])
  const reciveData=(data)=>{
    setproductID(data);
  }
  return (
    <div className="App">
      <Nav></Nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Firstprj parentData={reciveData}/>} />
          {
            productID.map((z)=>(
              <Route path={'/SingleProduct/'+z.id} element={<SingleItem
              productID={z.id}
              productIMG={z.productID}
              />}/>
            ))
          }
        </Routes>
      </div>
    </div>
  );
}

export default App;
