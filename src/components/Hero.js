import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <div className='hero'>
      <h3>Feel free to contact us <br></br> for our affordable services </h3>
    <div className='card'>
      <form>
      <h3>Contact us</h3>
      <label>First Name:</label>
      <input type="text" placeholder='John Doe'></input>
      <label>Email:</label>
      <input type="text" placeholder='abc@gmail.com'></input>
      <label>Phone Number:</label>
      <input type="number" placeholder='07895345535'></input>
      <Button />
      </form>
    </div>
    <Button />
    </div>
  )
}

export default Hero