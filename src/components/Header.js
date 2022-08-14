import React from "react";
import forstaLogo from "../assets/images/forstaLogo.jpg";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={forstaLogo} alt="Logo" />
      <h2 className="title">Todo List</h2>
    </div>
  );
};

export default Header;
