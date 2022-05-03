import React from 'react'
import {Link} from "react-router-dom"
import BannerImage from '../assets/italian-food-background-jpg.jpg'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='headerContainer'>
        <h1>FoodHub</h1>
        <p>What are you craving today?</p>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
