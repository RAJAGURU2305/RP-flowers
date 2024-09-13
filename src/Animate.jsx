import Image from 'react-bootstrap/Image';


import React from 'react'

const Animate = () => {
  return (
    <>
    <h1>Best Sellers</h1>
    <div className='Animate'>  
        <Image src="./images/29.webp" style={{padding:"20px"}} fluid />
        <Image src="./images/19.webp" style={{padding:"20px"}} fluid />
        <Image src="./images/20.webp" fluid />
    </div>
   
    </>
  )
}

export default Animate