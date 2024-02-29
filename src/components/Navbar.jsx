import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

import logo from "../assets/MIDI_LOGO.svg";
export default function Navbar() {
  const [navState, setNavState] = useState(false);
  return (
    <nav>
      <div className="brand-container">
        <div className="brand">
          <img src={logo} alt="logo" />
        </div>
        <div className="toggle-container">
          <div className="toggle">
            {navState ? (
              <MdClose onClick={() => setNavState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavState(true)} />
            )}
          </div>
        </div>
      </div>
      <div className={`links-container ${navState ? "nav-visible" : ""}`}>
        <ul className="links">
          {/* <li>
            <a href="#giveaways">Giveaways</a>
          </li> */}
          <li>
            <a href="#activity">Services</a>
          </li>
          <li>
            <a href="#discover">Our Artists</a>
          </li>
          <li>
            <a href="#launch">Events</a>
          </li>
          <li>
            <a href="#signup">Contact-Us</a>
          </li>

        </ul>
      </div>
    </nav>
  );
}
