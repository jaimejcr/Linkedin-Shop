import React from "react";
import Rating from "./Rating";



export function Content({card}) {
  let UserValue = "";
  
    return (
      <div className="div">
        <h2 className="title">{card.name}</h2>
        <Rating rating={card.rating} />
        <p className="gender">{card.gender}</p>
        <h3 className="job">{card.job}</h3>
        <h2 className="city">{card.city}</h2>
      </div>
    );
 
}
