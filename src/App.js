import logo from './logo.svg';
import './App.css';
import Header from "../src/components/Header/index";
import Data from "../src/utils/Data";

function App() {
  return (
   <Header Data={Data} />
  );
}

export default App;
