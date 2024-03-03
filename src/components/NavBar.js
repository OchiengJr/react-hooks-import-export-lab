import React from "react";

function NavBar() {
  return (
    <nav style={styles.nav}>
      <a href="#home" style={styles.link}>
        Click me to go home!
      </a>
    </nav>
  );
}

// Define styles as a separate variable
const styles = {
  nav: {
    backgroundColor: "#333",
    padding: "10px",
    textAlign: "center"
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px"
  }
};

export default NavBar;
