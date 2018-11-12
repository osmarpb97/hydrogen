import React, { Component } from 'react';
import M from  'materialize-css'
import { Link } from 'react-router-dom'
import './Navbar.css'

class Navbar extends React.Component{
    componentDidMount() {
        let elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {coverTrigger: false, alignment:'right'});
        var elems2 = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems2, {});
    }
    render(){
        return (
            <div className="navbar-fixed">
                <ul id="dropdown1" className="dropdown-content">
                    <li><a href="#!">Where To Buy</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">Investors</a></li>
                </ul>
                <ul id="dropdown2" className="dropdown-content">
                    <li><a href="#!">Current News</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">Upcoming Events</a></li>
                </ul>
                <ul className="sidenav" id="mobile-demo">
                    <li><a href="sass.html">Home</a></li>
                    <li><a href="badges.html">Applications</a></li>
                    <li><a href="collapsible.html">How It Works</a></li>
                    <li><a href="mobile.html">About Us</a></li>
                </ul>
                <nav className="transparent_bg fixed">
                    <div className="nav-wrapper container">
                        <a href="#!" className="brand-logo-left" >Logo</a>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                        <li><a href="sass.html">Home</a></li>
                        <li><a href="badges.html">Applications</a></li>
                        <li><a href="badges.html">How It Works</a></li>
                        <li><a href="badges.html">Certifications</a></li>
                        <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Services<i className="material-icons right">arrow_drop_down</i></a></li>
                        <li><a className="dropdown-trigger" href="#!" data-target="dropdown2">News & Events<i className="material-icons right">arrow_drop_down</i></a></li>
                        <li><a href="badges.html">About Us</a></li>
                        <li><a href="badges.html">Contact Us</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Navbar;