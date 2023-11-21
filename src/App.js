import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intros from "./Components/Intros/Intros";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";

function App() {
  return (
    <div className="App">
   <Navbar/>
   <Intros/>
   <Services/>
   <Experience/>
   <Works/>
    </div>
  );
}

export default App;
