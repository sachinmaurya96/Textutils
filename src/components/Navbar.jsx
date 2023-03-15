import React, {useState} from "react";
import PropTypes from "prop-types";

function Navbar(props) {
  
  const checkhandle = (e) => {
    
    if(e.target.checked == true){
      document.body.style.background ="black"
      document.body.style.color ="#fff"
      document.getElementById("mode").innerText ="Enable light mode"
    }else{
      document.body.style.background ="#fff"
      document.body.style.color ="black"
      document.getElementById("mode").innerText ="Enable dark mode"
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <div className="form-check form-switch">
                <input
                  className="form-check-input "
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  onChange={checkhandle}
                  
                />
                <label
                  className="form-check-label text-light"
                  htmlFor="flexSwitchCheckDefault"
                  id="mode"
                >
                
                </label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
};
export default Navbar;
Navbar.defaultProps = {
  title: "set title here",
};
