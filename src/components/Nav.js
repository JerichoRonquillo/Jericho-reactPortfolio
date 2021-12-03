import React from "react";



export function Nav(props) {
  return (
    <>
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-dark p-4 d-flex justify-content-around">
          {props.navoptions.map((item) => {
            return <a href={item.href} key={item.id} className="custom-nav-items">
              {item.text}
            </a>
          })}
        </div>
      </div>
      <nav className="navbar navbar-dark transparent">
        <div className="container-fluid justify-content-between">
          <p id="Jericho">Jericho</p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id="burgerButton"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </>
  );
}
