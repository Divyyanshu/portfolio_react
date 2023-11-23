import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intros from "./Components/Intros/Intros";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Imagecarousel from "./Components/Imagecarousel";


function App() {
  return (
    <div className="App">
   <Navbar/>
   <Intros/>
   <Services/>
   <Experience/>
   <Works/>
   <Imagecarousel />
    </div>
  );
}

export default App;
