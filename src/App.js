// import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react'
import Header from "../src/components/Header/index";
import About from "../src/components/About/index";
import EducationSkills from "../src/components/EducationSkills/index";
import Projects from "../src/components/Projects/index";
import Testimonial from "../src/components/Testimonial/index";
import Data from "../src/utils/Data";

class App extends Component {
  render() {
  return(
<div className="App">
   <Header Data={Data} />
   <About Data={Data} /> 
   <EducationSkills Data={Data} />
   <Projects Data={Data} />
   <Testimonial Data={Data}/>
   </div>
  );
}
}

export default App;
