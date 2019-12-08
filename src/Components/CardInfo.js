import React from 'react'


function CardInfo(props) {
  return(
    <div> 
      <p className="g-card-title">{props.title}</p>
      <p className="g-card-subtitle">{props.subTitle}</p>
      <a href="https://www.google.com/" target="_blank" rl="noopener noreferrer">View</a>
    </div> 
  )
}
export default CardInfo