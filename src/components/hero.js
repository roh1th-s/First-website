import React from 'react'

import Button from './button.js'

import '../App.css'
import './hero.css'

function hero() {
  return (
    <div className="hero-container">
      <video src='/videos/video2.mp4' autoplay loop muted />
      <h1>My first webpage</h1>
      <p>This is just a test website</p>
      <div className="hero-btns">
        <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>
          TEST 1
        </Button>
        <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>
          TEST 2
          <i className='fas fa-play-circle' />
        </Button>
      </div>
    </div>
  )
}

export default hero
