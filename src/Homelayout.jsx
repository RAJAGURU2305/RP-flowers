import React from 'react'
import Slider from './Slider'
import Imagetag from './Imagetag'
import About from './About'
import Animate from './Animate'

const Homelayout = () => {
  return (
    <div>
        <Slider />
        <Imagetag />
        <About />
        <Animate />
    </div>
  )
}

export default Homelayout