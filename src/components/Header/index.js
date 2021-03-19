import React, { Component } from "react";
import "./style.css";
class Header extends Component {
    render() {
        let Data = this.props.Data;
        return (

            <header id="home">
                <nav id="nav-wrap">
                    <ul id="nav" className="nav">
                        <li className="current">
                            <a className="smoothscroll"
                                href="#home">Home</a>
                        </li>
                        <li >
                            <a className="smoothscroll"
                                href="#about">About</a>
                        </li>
                        <li >
                            <a className="smoothscroll"
                                href="#resume">Resume</a>
                        </li>
                        <li >
                            <a className="smoothscroll"
                                href="#portfolio">Portfolio</a>
                        </li>
                        <li >
                            <a className="smoothscroll"
                                href="#testimonials">Testimonials</a>
                        </li>
                        <li >
                            <a className="smoothscroll"
                                href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>

                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">
                            I am {Data.name} </h1>
                        <h3 style={{ color: "#fff", fontFamily: "sans-serif" }}>I am a {Data.role}.</h3>
                        <hr />
                        <ul className="social">
                            {
                               Data.socialLinks && Data.socialLinks.map(item => {
                                    return (
                                        <li key={item.name}>
                                            <a href={item.url} target="_blank">
                                                <i className={item.className}></i>
                                            </a>
                                        </li>
                                    )


                                }
                                )
                            }
                        </ul>
                    </div>
                </div>


                <p className="scrolldown">
                    <a className="smoothscroll"
                        href="#"><i
                            className="icon-down-circle"></i>

                    </a>
                </p>

            </header>

        )
    }
}

export default Header;