import React from 'react'
import './Cards.css'
import hot1 from './assests/hotel2.avif'
import hot2 from './assests/hotel3.jfif'
import hot3 from './assests/hotel4.jfif'
import hot4 from './assests/hotel5.jfif'

export default function Slider() {
  return (
    <div className="card-container">
          {/* Card 1 */}
          <div className="card">
            <img src={hot1} alt="hotel1" />
            <h2>Oberoi Hotels</h2>
            <p>The Oberoi Mumbai is a striking example of modern architecture that lifts you over Marine Drive to enjoy magnificent views of the Arabian Sea and the sparkling ...</p>
          </div>

          {/* Card 2 */}
          <div className="card">
            <img src={hot2} alt="hotel2" />
            <h2>Taj Falaknuma Palace</h2>
            <p>Glamorous Mumbai is home to The Taj Mahal Palace, one of the best luxury hotels in India, whose opulence challenges that of Mumtaz's original. Having hosted ...</p>
          </div>

          <div className="card">
            <img src={hot3} alt="Dog" />
            <h2>The Leela Palace</h2>
            <p>The Leela Palace Udaipur promises a tranquil and undisturbed escape while overlooking the splendours of Lake Pichola. Backed by Aravalli Hills, this stately ...</p>
          </div>

          <div className="card">
            <img src={hot4} alt="Rabbit" />
            <h2>Umaid Bhawan Palace</h2>
            <p>Umaid Bhawan Palace, Jodhpur; Rambagh Palace, Jaipur; Jawahar Niwas Palace, Jaisalmer; Spice Village, Thekkady; Brunton Boatyard, Kochi. Boutique Hotels</p>
          </div>
        </div>
  )
}
