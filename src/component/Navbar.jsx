import React from "react";

import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar  navbar-expand-lg navbar-dark border-bottom bg-dark">
        <div className="container">
          <Link className="navbar-brand border-bottom border-danger" to="/">
            <span className="text-danger">St</span>ori
            <span className="text-danger">es</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav w-100 d-flex justify-content-between align-items-center">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <div className="buttons ">
                  <div className="btn btn-dark ">
                    <Link
                      className="text-white text-decoration-none "
                      to="/form"
                    >
                      Form
                    </Link>
                  </div>
                  <div className="btn btn-dark">
                    <Link
                      className="text-white  text-decoration-none "
                      to="/list"
                    >
                      list
                    </Link>
                  </div>
                </div>
              </li>
              {/* <li className="nav-item dropdown " style={{ cursor: "pointer" }}>
                <Link
                  className="nav-link dropdown-toggle "
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Peoples
                </Link>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link className="dropdown-item" to="/list">
                    List
                  </Link>
                   <Link className="dropdown-item" to="/navin">
                    Navin
                  </Link> 
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
