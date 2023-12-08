import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import { username, city, image } from "../data/user";

function App() {
  return (
    <div>

      <NavBar />

   
      <Home />

      
      <About />

   
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <p>
          Hey {username} from {city}! Welcome to my awesome React app!
        </p>
        <p>
          Check out the navigation bar, explore the home page, and learn more about me in the "About" section.
        </p>
        <img src={image} alt="User Avatar" style={{ maxWidth: "100%", borderRadius: "8px", marginTop: "20px" }} />
      </div>
    </div>
  );
}

export default App;

