
import React from 'react'
import { Categories } from '../../components/Categories/Categories'
import { FeaturedProducts } from '../../components/Featuredproducts/FeaturedProducts'

import  {Slider}  from '../../components/Slider/Slider'
import './Home.scss'

export const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type='featured'/>
      <Categories/>
      <FeaturedProducts type='trending'/>
    </div>
  )
}

