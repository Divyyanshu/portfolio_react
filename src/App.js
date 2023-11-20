import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intros from "./Components/Intros/Intros";
import Services from "./Components/Services/Services";

function App() {
  return (
    <div className="App">
   <Navbar/>
   <Intros/>
   <Services/>
    </div>
  );
}

export default App;
