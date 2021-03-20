// import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react'
import Header from "../src/components/Header/index";
import About from "../src/components/About/index";
import Data from "../src/utils/Data";

class App extends Component {
  render() {
  return(
<div className="App">
   <Header Data={Data} />
   <About Data={Data} /> 
   </div>
  );
}
}

export default App;
