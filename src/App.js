import { Navbar,About,Description, Ecosystem, Features,Footer} from "./components/Desktop1";
import './App.css';
import Desktop2 from "./Desktop2";

const App = () => {
  return (
    <div className="App">
      <div className="Desktop1">
        <Navbar/> 
        <About/>
        <Description/>
        <Features/>
        <Ecosystem/>
        <Footer/>
      </div>
      
        <Desktop2 />
    </div>
  );
}

export default App;
