import React from 'react'

import '../../App.css'

import Cards from '../cards'
import Hero from '../hero.js'
import Footer from '../footer'

function home() {
  return (
    <>
      <Hero /> 
      <Cards /> 
      <Footer />
    </>
  )
}

export default home
