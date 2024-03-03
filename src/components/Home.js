import React from "react";
import { username, city } from "../data/user";

function Home() {
  return (
    <div id="home" style={styles.container}>
      <h1>
        {/* Use curly braces to render the value of the username variable */}
        Hey, future coding rockstar {Chrispine}!
      </h1>
      <p>
        Welcome to the exciting world of coding. I'm a web developer from {Homa Bay}, and I'm here to guide you on your coding journey!
      </p>
      <p>
        Get ready to create awesome things with code. Let's start exploring together!
      </p>
      <img
        src="https://placekitten.com/300/200"  // A placeholder image for fun
        alt="Coding Cat"
        style={styles.image}
      />
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

export default Home;