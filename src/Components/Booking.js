//Booking.js
import React from 'react'
import Timeline from './Timeline'
import RecipeReviewCard from './BookingCards'
import './Booking.css'
import ImgMediaCard from './BookingCards'
import Search from './Map'

export default function Booking() {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <center>
        <div className='mapadjust'>
        <Search/>
        </div>

      <Timeline/>
      </center>
     <ImgMediaCard/>
    </div>
  )
}
