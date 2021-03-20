import React, { Component } from "react";
class About extends Component {
    render() {
        let Data = this.props.Data;
        return (
            <section id="about" >
                <div className="row" >
                    <div className="three columns">
                        <img className="profile-pic" src="src/assets/WhatsApp Image 2020-11-15 at 12.17.13 AM.jpeg" alt="profile pic" />
                    </div>
                    <div className="nine columns  main-col" >
                        <h2> About me</h2>
                        <p>{Data.aboutme}</p>
                        <div className="row">
                            <div className="columns contactDetails">
                                <h1> Contact me</h1>
                                <p className="address">
                                    <span> {Data.name}</span> <br />
                                    <span> {Data.address}</span> <br />
                                    <span> {Data.website}</span>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}
export default About;