import React from "react";
import "./CarInfo.css";


function CarInfo (props) {
    return (
        <div className="car-info">
            <h3>{props.name}</h3>
            <p>{props.modelName}</p>
        </div>
    )
}

export default CarInfo;