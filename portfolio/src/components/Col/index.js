import React from "react";

function Col(props) {
  const size = props.size.split(" ").map(size => "col-" + size).join(" ");

  return <div className={size} style={{ backgroundImage: `url(${props.backgroundImage})`, backgroundRepeat  : 'no-repeat'}}>{props.children}</div>;
}

export default Col;