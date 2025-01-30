import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav>
      <div className="logo">EventSphere</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          <Link to="hero" spy={true} smooth={true} duration={1000}>
            HOME
          </Link>
          <Link to="services" spy={true} smooth={true} duration={1000}>
            SERVICES
          </Link>
          <Link to="about" spy={true} smooth={true} duration={1000}>
            ABOUT
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={1000}>
            CONTACT
          </Link>
        </div>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
