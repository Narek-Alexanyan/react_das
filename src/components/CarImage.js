import React from 'react';
import "./CarImage.css";

function CarImage(props) {
    return (
        <div className="car-image">
            <img src={props.image} alt="lamborghini urus"/>
        </div>
    )
}

export default CarImage;
