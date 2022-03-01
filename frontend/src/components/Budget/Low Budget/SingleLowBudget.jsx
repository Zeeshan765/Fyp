import React from "react";
import "./SingleLowBudget.css";
//import cooler from "../../../Assets/cooler.jpg";
const SingleLowBudget = ({ data }) => {
  console.log(data);
  return (
    <>
      
        <div className="product-box">
          <div className="upper-box">
            <img src={data.image} alt="" />
          </div>
          <div className="lower-box">
            <h3>{data.name}</h3>
            <h4>{data.price}</h4>
            <p>{data.description}</p>
            <button className="btn-1">View Detail</button>
          </div>
        </div>
     
    </>
  );
};

export default SingleLowBudget;


/*
<div className="card-wrapper">
        <div className="card-box">
          <div className="upper-card">
            <img src={data.image} alt="" />
          </div>
          <div className="lower-card">
            <h3>{data.name}</h3>
            <h4>{data.price}</h4>
            <p>{data.description}</p>
            <button className="btn-view">View Detail</button>
          </div>
        </div>
      </div>*/