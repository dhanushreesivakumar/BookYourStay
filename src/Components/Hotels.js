// Hotels.js
import React from 'react'
import Search from './Map'
import Slider from './Cards'
import CardSlider from './CardSlider'

export default function Hotels() {
  return (
    <div className='hotel'>
      <Search/>
      <h6>Compare Accomodation Now Quick & Easy to Book,No Hidden Fees Price Match Guarantee,Instant Confirmation Around-The-Clock Customer Service
      </h6>
      <Slider/>
      <CardSlider/>
    </div>
  )
}
