import React from 'react';
import logo from '../assets/logo.png';

function LeftHeader() {
  return (
    <div className="left-header">
      <img src={logo} alt="logo" />
      <h1>
        Help Us <br />
        You will be able to create what <br />
        <span style={{ fontSize: '50px' }}>you wish!</span>
      </h1>
      <p>
        Our capabilities + experience ... and some other text that I can't read
      </p>
      <button className="bounce-button">Learn more...</button>
    </div>
  );
}

export default LeftHeader;
