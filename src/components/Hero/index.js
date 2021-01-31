import React from "react";
import "./style1.css";

function Hero(props) {
  return (
    <div className="hero text-center bg-img cover">
      {props.children}
    </div>
  );
}

export default Hero;