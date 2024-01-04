//import { ClassNames } from "@emotion/react";
import React from "react";
import ReactCardSlider from "react-card-slider-component";
import "./CardSlider.css";


function CardSlider() {
  const slides = [
    {
      image: "https://png.pngtree.com/thumb_back/fh260/background/20220311/pngtree-bedroom-guest-room-five-star-hotel-image_990205.jpg",
      title: "Taj Fort Aguada Resort",
      description: "The Exotica is the most plush of the Taj group's ",
      clickEvent:()=>{
        return(
          <div>
            
          </div>
        )
      }
    },
    {
      image: "https://www.wallpapers13.com/wp-content/uploads/2016/02/Hotel-terrace-chairs-ocean-Maldives-Hd-wallpaper-2560x1440.jpg",
      title: "Jammu",
      description: "It is the headquarters "
    },
    {
      image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Rajendra Vilas",
      description: " located on top of Chamundi Hills",
      clickEvent:()=>{}
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSVJTshsa_9PFIY0X7zZDVrZW-tnWmhMasxg&usqp=CAU",
      title: "Bolgatty Palace",
      description: " Dutch palaces outside Holland",
      clickEvent:()=>{}
    },
    {
      image: "https://media.cntraveller.in/wp-content/uploads/2021/01/Hilton-Goa-Resort-1366x768.jpg",
      title: "Hotel Rutt Deen, Kolkata",
      description: "save a few bucks from their accommodation expense.",
      clickEvent:()=>{}
    },
    {
      
      image: "https://www.hdhotels.com/content/imgsxml/panel_herohotel/1.cabecerahdpcgc974.jpg",
      title: "Sai Villa, New Delhi",
      description: " designed under resident supervision. ",
      clickEvent:()=>{}
    },
    {
      image: "https://wallpapercave.com/wp/wp6957260.jpg",
      title: "Centaur Hotel, New Delhi",
      description: "Airport hotels are the hotels  ",
      clickEvent:()=>{}
    },
    {
      image: "https://cdn.pixabay.com/photo/2017/06/11/12/33/swimming-2392283_640.jpg",
      title: "The Manor,",
      description: "Boutique hotels in India",
      clickEvent:()=>{}
    },
    {
      image: "https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_640.jpg",
      title: "ITC Hotels",
      description: "The luxury hotels in India   ",
      clickEvent:()=>{}
    }
  ];
  return (
    <div class="ko">
    <>
      <ReactCardSlider slides={slides} />
    </>
    </div>
  );
}

export default CardSlider;