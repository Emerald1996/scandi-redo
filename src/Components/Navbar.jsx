import React, { Component } from 'react'
import Navigation from "./Navigation"
import CurrencySwitch from './CurrencySwitch';
import Minicart from './Minicart';
import Logo from "../Assets/logo.svg"
import "../Styles/Navbar.css"

export class Navbar extends Component {
  render() {
    return (
        <>
        <div className="navbar">

            <div >
               <Navigation/>
            </div>

            <div className="logo">
                <a href="/"><img src={Logo} alt={Logo}/></a>
            </div>

            <div className="right-nav">
                <CurrencySwitch/>
                <Minicart />
            </div>
        </div>
        </>
    )
  }
}

export default Navbar