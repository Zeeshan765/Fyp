import React from 'react';
import './ReqComp.css';
let cat;
const ReqComp = ({ data, sugg, check }) => {
  return (
    <>
      <div className='product-box'>
        <div
          onMouseEnter={() => {
            cat = data.category;
          }}
          onMouseLeave={() => sugg(cat)}
          // onClick={() => sugg(cat)}
          className='upper-box'
        >
          <img src={data.image} alt='' />
        </div>
        <div
          onMouseEnter={() => {
            cat = data.category;
          }}
          onMouseLeave={() => sugg(cat)}
          className='lower-box'
        >
          <h3>{data.name}</h3>
          <h4>{data.price}</h4>
          <p>{data.description}</p>
          <button onClick={() => check()} className='btn-1'>
            Check
          </button>
        </div>
      </div>
    </>
  );
};

export default ReqComp;
