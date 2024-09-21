import React from "react";
// import { Link } from "react-router-dom";

export default function NavBar({
  title = "default",
  aboutText = "about",
  toggleFunction,
  mode = { backgroundColor: "white", color: "black",theme:'light',display:'enable DarkMode' }
}
) {
  return (
    <nav className="navbar navbar-expand-lg px-2" style={mode}>
        <img src='favicon-32x32.png' className="mx-2" alt='icon'/>
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
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                style={mode}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={mode}>
                {aboutText}
              </a>
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
