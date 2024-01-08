import React from "react";

function Icons(props) {
  return (
        <a href="https://www.instagram.com/" target="blank"> 
            <img className="iconeimagem" src={props.foto} alt="*" style={{ width: "2.5rem", height: "2.5rem" }} />
        </a>
    );
}

export default Icons;
