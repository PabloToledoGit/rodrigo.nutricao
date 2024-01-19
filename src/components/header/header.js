import React from "react";
import "./header.css";
import Links from "./../links/links.js";

function Header() {
  return (
    <div className="header">
      <div className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Rodrigo Marinho
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end bg-dark"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title text-white" id="offcanvasNavbarLabel">
                Guia
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Links text="Home" url="*" />
                </li>
                <li className="nav-item text-dark">
                  <Links text="Sobre mim" url="*" />
                </li>
                <li className="nav-item text-dark">
                  <Links text="Agendamentos" url="*" />
                </li>
                <li className="nav-item text-dark">
                  <Links text="E-book" url="*" />
                </li>
                <li className="nav-item text-dark">
                  <Links text="Depoimentos" url="*" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
