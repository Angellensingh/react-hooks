import React from 'react'
import Car from './Car'

const Garage = () => {
    const brand ="Ford"
    return (
    <>
    
    <h1>who lives in my garage?</h1>
    <Car brand={brand}/>
    </>
  )
}

export default Garage