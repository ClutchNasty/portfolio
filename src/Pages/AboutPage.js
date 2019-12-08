import React from 'react'
import Sample from "../Components/Sample"
import Content from "../Components/Content"

function AboutPage(props) {
  return(
    <div>
      <Sample title={props.title} />
      
      <Content />
      <h3 className="styles">Hi, my name is Devyn!  I recently have picked up web development and have really enjoyed
        learning new concepts thought computer programming. I enjoy doing photography, and will take my frineds out
        just to do photo shoots with them.  I love Adidas, thier fashion all around is very appealing to me and 
        it only encourages me to want to do more photo shoots with friends more, as they also have a love for 
        Adidas fashion.
      </h3>
       
    </div>
  )
}

export default AboutPage