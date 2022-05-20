import React from 'react';
import '../components/Premium.css';

const premium = () => {
  return (
    <div className="prem">
    <div className="less">
        <h2>Premium Movies</h2>
        <h4>Upcoming Movies</h4>
    </div>
    <div className="grid-container">
      <div className="grid-item1">
        <h3>Money Heist</h3>
      </div>
      <div className="grid-item2">
      <h3>Merlin</h3>
      </div>
      <div className="grid-item3">
      <h3>Bad Lands</h3>
      </div>
      <div className="grid-item4">
      <h3>365 Days</h3>
      </div>
    </div>
    </div>
  )
}

export default premium;