import React from "react";
import defaultZooImage from "./zoo.jpg";
import { NavLink } from "react-router-dom";

const DefaultZoo = ({
    id,
    name = "No name",
    area = 0,
    price = 0,
    location = "Nowhere",
    imageSrc = defaultZooImage,
}) => {
    return (
        <div className="custom-container">
            <div className="custom-zoo-item">
                <img src={imageSrc} className="custom-zoo-image" alt="zoo" />
                <h2 className="custom-zoo-name">{name}</h2>
                <h6 className="custom-zoo-text">Area: <text>{area} square kilometers</text></h6>
                <h6 className="custom-zoo-text">Location: <text>{location}</text></h6>
                <h6 className="custom-zoo-text">Price: {price} $</h6>
                {/* <NavLink exact to={`/Catalog/${id}`} className="custom-link"> View more</NavLink> */}
            </div>
        </div>
    );
};

export default DefaultZoo;
