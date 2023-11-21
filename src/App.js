import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intros from "./Components/Intros/Intros";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";

function App() {
  return (
    <div className="App">
   <Navbar/>
   <Intros/>
   <Services/>
   <Experience/>
    </div>
  );
}

export default App;
