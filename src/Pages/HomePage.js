import React from 'react'
import Sample from '../Components/Sample'
import Carousel from '../Components/Carousel'

function HomePage(props) {
  return(
    <div >
      <h1>
      <Sample 
        title={props.title} 
        subTitle={props.subTitle} 
        text={props.text}/>
      </h1>
      <Carousel />
    </div>
  )
}

export default HomePage