import React from "react";
import './links.css';


function Links(props) {
    return (
        <div className="Divlinks">
            <a className="Links" href={props.url} rel="noreferrer">{props.text}</a>
        </div>
    );
}

export default Links;

