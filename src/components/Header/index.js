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








            </header>

        )
    }
}

export default Header;