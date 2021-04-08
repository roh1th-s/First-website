import React from 'react'

import CardItem from './cardItem'
import './cards.css'

import CardImage1 from '../images/img-2.jpg'

function cards() {
  return (
    <div className="cards">
      <h1>Check out this cool website</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
              src={CardImage1}
              text='Random lorem ipsum shit'
              label='Test'
              path='/services'
            />
            <CardItem 
              src={CardImage1}
              text='Random lorem ipsum shit 2'
              label='Test 2'
              path='/services'
            />
          </ul>
          <ul className="cards__items">
            <CardItem 
              src={CardImage1}
              text='Random lorem ipsum shit'
              label='Test'
              path='/services'
            />
            <CardItem 
              src={CardImage1}
              text='Random lorem ipsum shit 2'
              label='Test 2'
              path='/services'
            />
             <CardItem 
              src={CardImage1}
              text='Random lorem ipsum shit 2'
              label='Test 2'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default cards
