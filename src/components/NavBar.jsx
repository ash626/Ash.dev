import React from 'react';
import '../scss/main.scss';

export default function NavBar() {
  return (
    <nav className="nav">
      <div>
        <h4>the nav</h4>
      </div>
      <ul className="navlinks">
        <li className="navlink">Work</li>
        <li className="navlink">Projects</li>
        <li className="navlink">Contact Me</li>
      </ul>
    </nav>
  );
}
