import React from 'react'
import './Navbar.css'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='header'>
        <h1>Techwiz</h1>
        <ul>
            <li>HOME</li>
            <li>Series
            </li>
            <li>Movies</li>
            <li>Membership</li>
        </ul>
        <ul>
        <li>Sign in</li>
        </ul>
        <Button  />
    </div>
  )
}

export default Navbar