import React from 'react'
import './Navbar.css'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='header'>
        <h1><span style={{color: "red"}} >Tech</span>wiz</h1>
        <ul>
            <li>
            <a href='/'>Home</a>
            </li>
            <li>
                <a href='/about'>About</a>
            </li>
            <li><a href='/movies'>Movies</a></li>
            <li>
            <a href='/member'>Membership</a>
            </li>
        </ul>
        <ul>
        <li><a href='/about'>About</a></li>
        </ul>
        <Button />
    </div>
  )
}

export default Navbar