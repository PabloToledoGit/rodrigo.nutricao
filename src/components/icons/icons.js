import React from "react";
import "./icons.css";

function Icons(props) {
  return (
        <a href={props.link} target="blank"> 
            <img className="iconeimagem" src={props.foto} alt="*" style={{ width: "2.5rem", height: "2.5rem" }} />
        </a>
    );
}

export default Icons;