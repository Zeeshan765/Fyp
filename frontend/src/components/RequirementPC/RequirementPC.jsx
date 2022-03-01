import React from 'react';
import './RequirementPC.css';
import PUBG from '../../Assets/PUBG.png';
import GTAV from '../../Assets/GTAV.jpg';
import Apex from '../../Assets/Apex.jpg';
import ReqPCdata from './ReqPCdata';
import ReqComp from './ReqComp';
import { useState } from 'react';

const RequirementPC = () => {
  const [cat, setCat] = useState('low'); //default category

  const [pubgfps, setPubgfps] = useState('~40');
  const [pubgReso, setPubgReso] = useState('1080p');
  const [gtafps, setgtafps] = useState('~30');
  const [gtareso, setgtareso] = useState('900p');
  const [apexfps, setApexfps] = useState('~30');
  const [apexreso, setApexreso] = useState('900p');
  function check() {
    if (cat == 'low') {
      setPubgfps('~40');
      setPubgReso('1080p');
      setgtafps('~30');
      setgtareso('900p');
      setApexfps('~40');
      setApexreso('900');
    } else if (cat == 'med') {
      setPubgfps('~60');
      setPubgReso('1080p');
      setgtafps('~50');
      setgtareso('1080p');
      setApexfps('~60');
      setApexreso('1080p');
    } else if (cat == 'high') {
      setPubgfps('120+');
      setPubgReso('1440p');
      setgtafps('~80+');
      setgtareso('1080p');
      setApexfps('~100+');
      setApexreso('1440p');
    }
  }

  return (
    <>
      <div className='bar'>
        <h2 className='performance'> Estimated Performance</h2>
      </div>
      <div className='gameimages'>
        <div className='firstgame'>
          <img className='reqimg' src={PUBG} alt='' />
          <h2>Average FPS</h2>
          <h3 className='pubgfps'> {pubgfps}</h3>
          <h2>Resolution</h2>
          <h3>{pubgReso} </h3>
        </div>
        <div className='secondgame'>
          <img className='reqimg' src={GTAV} alt='' />
          <h2>Average FPS</h2>
          <h3> {gtafps}</h3>
          <h2>Resolution</h2>
          <h3> {gtareso}</h3>
        </div>
        <div className='thirdgame'>
          <img className='reqimg' src={Apex} alt='' />
          <h2>Average FPS</h2>
          <h3> {apexfps}</h3>
          <h2>Resolution</h2>
          <h3> {apexreso}</h3>
        </div>
      </div>
      <div className='bar'>
        <h2 className='performance'>Available Builds</h2>
      </div>
      <div className='reqdata'>
        {ReqPCdata.map((data, index) => (
          <ReqComp check={check} sugg={setCat} key={index} data={data} />
        ))}
      </div>
    </>
  );
};

export default RequirementPC;
