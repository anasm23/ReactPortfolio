import React from "react";
import Hero from "../components/Hero";
import Picture from "../img/picture.jpg";


function Home() {
  return (
    <Hero>
      <div className="container mt-5 pt-5">
        <div className="row mt-5">
        <div className="col mt-5">
          <h1 className="display-2">Muhammad Anas</h1>
          <h3 className="lining">Full Stack Developer based in Northern Virginia.</h3>
        <img src={Picture} alt="me"></img>
        <div><br></br>
        <br></br>
        <br></br>
        <br></br></div>
        </div>
        </div>
      </div>
    </Hero>
  );
}

export default Home;