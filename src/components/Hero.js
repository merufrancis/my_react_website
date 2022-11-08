import React from 'react'
import Button from './Button'
import '../App.css'
import { useState } from 'react'
import '../components/Premium.css'

const Hero = () => {

  const [count, setCount] = useState(0);
  return (
    <>
    <div className='hero'>
      <p><b>Watch your<br></br> favourite Movies <br></br>NOW.</b></p>
      <div className='thug'>
      <Button />
    <button class="bttn">Play more</button>
    </div>
    </div>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>
      Click me
    </button>
    <div className="prem">
    <div className="less">
        <h2>Premium Movies</h2>
        <h4>Upcoming Movies</h4>
    </div>
    <div className="grid-container">
      <div className="grid-item1">
        <h3>Money Heist</h3>
        <h5>this is good</h5>
      </div>
      <div className="grid-item2">
      <h3>Merlin</h3>
      <h5>this is good</h5>
      </div>
      <div className="grid-item3">
      <h3>Bad Lands</h3>
      <h5>this is good</h5>
      </div>
      <div className="grid-item4">
      <h3>365 Days</h3>
      <h5>this is good</h5>
      </div>
    </div>
    </div>
    <div className="prem">
    <div className="less">
        <h2>Premium Movies</h2>
        <h4>Upcoming Movies</h4>
    </div>
    <div className="grid-container">
      <div className="grid-item1">
        <h3>Money Heist</h3>
        <h5>this is good</h5>
      </div>
      <div className="grid-item2">
      <h3>Merlin</h3>
      <h5>this is good</h5>
      </div>
      <div className="grid-item3">
      <h3>Bad Lands</h3>
      <h5>this is good</h5>
      </div>
      <div className="grid-item4">
      <h3>365 Days</h3>
      <h5>this is good</h5>
      </div>
    </div>
    </div>
    </>
  )
}

export default Hero