import React from "react";
import "./style.css";

const MenuCard = ({ menuData }) => {
  return (
    <>
      <section className="main-card--container">
        {menuData.map((curElem) => {
           const {id,image,name,category, price, description} = curElem;//deconstruction
          return (
            
            <div className="card-container" key={id}>
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle">{id}</span>
                  <span className="card-author subtle">{category}</span>
                  <h2 className="card-title" >{name}</h2>
                  <span className="card-description subtle">
                  {description}
                  </span>
                  <div className="card-read">Read</div>
        
                  {/* Uncomment and use the correct image source */}
                  <img src={image} alt="images" className="card-media" /> 
                  <span className="card-tag subtle">Order Now</span>
                </div>
              </div>
            </div>
            
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
