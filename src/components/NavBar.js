import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({
  title = "default",
  aboutText = "about",
  toggleFunction,
  mode = { backgroundColor: "white", color: "black",theme:'light',display:'enable DarkMode' }
}
) {
  return (
    <nav className="navbar navbar-expand-lg px-2" style={mode}>
        <img src='favicon-16x16.png' className="mx-2" alt='icon'/>
        <h2>{title}</h2>
      <div className="container-fluid" style={mode}>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={mode}
        >
          <span className="navbar-toggler-icon my-2" style={mode}></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={mode}
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={mode}>
            <li className="nav-item">
             {/* <h4 className="mx-3">Home</h4> */}
             <Link to='/'className="btn btn-primary mx-3 my-3">Home</Link>
            </li>
            <li className="nav-item">
            {/* <h4 className="mx-3 m" >{aboutText}</h4> */}
            <Link to='/about'className="btn btn-primary mx-3 my-3">{aboutText}</Link>
            </li>
          </ul>
          <form className="d-flex mx-4" role="search">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                onClick={toggleFunction}
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {mode.display}
              </label>
            </div>
          </form>
         
        </div>
      </div>
    </nav>
  );
}
