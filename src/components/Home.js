import React from "react";
import { username, city } from "../data/user";

function Home() {
  return (
    <div id="home" style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>
        Hey, future coding rockstar {Chris}! 
      </h1>
      <p>
        Welcome to the exciting world of coding. I'm a web developer from Kenya, and I'm here to guide you on your coding journey!
      </p>
      <p>
        Get ready to create awesome things with code. Let's start exploring together!
      </p>
      <img
        src="https://placekitten.com/300/200"  // A placeholder image for fun
        alt="Coding Cat"
        style={{ maxWidth: "100%", borderRadius: "8px", marginTop: "20px" }}
      />
    </div>
  );
}

export default Home;
