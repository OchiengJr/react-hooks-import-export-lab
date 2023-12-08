import React from "react";

function NavBar() {
  return (
    <nav style={{ backgroundColor: "#333", padding: "10px", textAlign: "center" }}>
      <a href="#home" style={{ color: "#fff", textDecoration: "none", fontSize: "18px" }}>
        Click me to go home!
      </a>
    </nav>
  );
}

export default NavBar;
