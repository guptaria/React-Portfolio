import React, { Component } from "react";
import "./style.css";
class EducationSkills extends Component {
    render() {
        let Data = this.props.Data;
        return (
            <section id="resume">
                <div className="row education"> <h1><span>Education</span></h1>
                </div>

                <div className="nine columns main-col">
                    {
                        Data.education.map(item => {
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>{item.UniversityName}</h3>
                                    <p className="info">
                                        {item.specialization}
                                        <span>&bull;</span> <em className="date">{item.MonthOfPassing}{item.YearOfPassing}</em>
                                    </p>
                                </div>
                            </div>
                        })
    }
                </div>

<div className="row skill">
    <div className="three columns header-col">
        <h1><span>Skills</span></h1>
    </div>

    <div className="nine columns  main-col">
        <p>{Data.skillsDescription}</p>
        <div className="bars">
            <ul className="skills">
                { 
                Data.skills.map(item=>{
                    return(
                        <li>
                           <span className={`bar-expand ${item.skillname.toLowerCase()}`}></span> <em>{item.skillname}</em>
                             </li>
                    )
                })
                } </ul>
        </div>
         </div>
     </div>




            </section>
        );
    }
}
export default EducationSkills;