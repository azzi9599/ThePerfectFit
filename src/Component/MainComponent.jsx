import React from 'react'
import NavLinks from './NavLinks'
import Banner from '../assets/banner1.jpg'
import Footer from './Footer'
import WomenBanner from '../assets/womenbanner.png'
import ProductPage from "./ProductPage"
import Kids from '../assets/kids.jpg'

const MainComponent = () => {
  return (
    <div>

      
      <NavLinks/>
<div>
      <div style={{ backgroundImage: `url(${Banner})` }} className="h-96 bg-cover w-full " >
      <h1 className='text-8xl font-bold text-white mt-3 pt-36 pl-9'>Create your perfect fit</h1>

      </div>

      <div style={{ backgroundImage: `url(${WomenBanner})` }} className="h-96 bg-cover w-full " >
      <h1 className='text-8xl font-bold text-white mt-2 pt-36 pl-9'>SELECT YOUR <br />PERFECT STYLE</h1>

      </div>

      <div style={{ backgroundImage: `url(${Kids})` }} className="h-96 bg-cover w-full " >
      <h1 className='text-8xl font-bold text-white mt-2 pt-36 pl-9'>STYLE KIDS IN <br />THEIR PERFECT STYLE </h1>

      </div>



      </div>

<Footer/>
    </div>
  )
}

export default MainComponent
