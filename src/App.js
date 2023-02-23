import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

// eslint-disable-next-line no-unused-vars
function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

// eslint-disable-next-line no-lone-blocks
{/* write an <About> component here */}
function About() {
  return (
    <div id="about">
      <h1>About</h1>
    </div>
  );
}


function App() {
  return (
    <div>
      <NavBar />
      <Home/> 
      <About/>
    </div>
  );
}

export default App;
