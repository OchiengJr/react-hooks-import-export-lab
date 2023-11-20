import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import  {username, city, image} from "../data/user";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
