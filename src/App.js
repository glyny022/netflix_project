import React from "react";
import Header from "./Components/Header";
import "./App.css"
import Home from "./Components/Home"
import Product from "./Components/Product";

function App() {
  return (
    <div className="App">
       <Header/>
       <Home/>
       <Product/>
    </div>
  );
}
export default App;
