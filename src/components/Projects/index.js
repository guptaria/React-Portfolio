import React, { Component } from "react";
import "./style.css";
class Projects extends Component {
    render() {
        let Data = this.props.Data;
        return (
            <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Check Out Some of My Works.</h1>
                        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                            {
                                Data.projects.map(item => {
                                    return (
                                        <div className="columns portfolio-item">
                                            <div className="item-wrap">
                                                <a href="#modal-01">
                                                    <img src={item.imgurl} className="item-img" />
                                                    <div className="overlay">
                                                        <div className="portfolio-item-meta">
                                                            <h5> {item.name}</h5>
                                                            <p> {item.description}</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>


            </section>
        );
    }
}
export default Projects;