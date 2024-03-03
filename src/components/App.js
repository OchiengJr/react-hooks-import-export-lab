import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import { username, city, image } from "../data/user";

function App() {
  return (
    <div>
      {/* Render navigation bar */}
      <NavBar />
   
      {/* Render home page */}
      <Home />
      
      {/* Render about section */}
      <About />
   
      <div style={styles.container}>
        <p>
          {/* Use template literals for string interpolation */}
          Hey {username} from {city}! Welcome to my awesome React app!
        </p>
        <p>
          Check out the navigation bar, explore the home page, and learn more about me in the "About" section.
        </p>
        {/* Apply styles using a separate variable */}
        <img src={image} alt="User Avatar" style={styles.image} />
      </div>
    </div>
  );
}

// Define styles as a separate variable
const styles = {
  container: {
    textAlign: "center",
    marginTop: "20px"
  },
  image: {
    maxWidth: "100%",
    borderRadius: "8px",
    marginTop: "20px"
  }
};

export default App;
