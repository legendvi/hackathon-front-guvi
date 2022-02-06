//This is Header Component that will be rendered on top
//This Component imports Component from react-bootstrap to give responsive NavBar

import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Dropdown from "./Dropdown";

const Header = () => {
  return (
    <>
      <Navbar
        className="sticky-top mb-0"
        expand="lg"
        bg="white"
        variant="light"
      >
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Dropdown compotent contains all the dropdowns used in NavBar */}
          <Dropdown />
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
