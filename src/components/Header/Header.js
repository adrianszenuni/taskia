import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="row d-flex justify-content-between header m-0">
      <div className="col-lg-2 d-flex justify-content-center align-items-center">
        <h1 className="header_logo">Taskia</h1>
      </div>
      <div className="col-lg-2 d-flex justify-content-center align-items-center">
        <button className="header_button">Try free</button>
      </div>
    </div>
  );
};

export default Header;
