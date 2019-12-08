import React from 'react'
import picone from '../Assets/Images/picone.jpeg'
import pictwo from '../Assets/Images/pictwo.jpeg'
import picthree from '../Assets/Images/picthree.png'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from "../Components/Card"



class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 0,
          title: "Adidas",
          subTitle: "adidas photography",
          imgSrc: picthree,
          link: "href",
          selected: "false"
        },

        {
          id: 1,
          title: "Passions",
          subTitle: "a couple of my hobbies",
          imgSrc: pictwo,
          link: "href",
          selected: "false"
        },

        {
          id: 2,
          title: "Web development",
          subTitle: "my experience",
          imgSrc: picone,
          link: "href",
          selected: "false"
        }
      ]
    }
  }

    handleCardClick = (id, card) => {
      console.log(id)
        let items = [...this.state.items]

        items[id].selected = items[id].selected ? false : true

        items.forEach(item => {
          if(item.id !== id) {
            item.selected = false
          }
        })

        this.setState({items})
    }
  

makeItems = (items) => {
  return items.map( item => {
    return <Card item={item} onClick={(e => this.handleCardClick(item.id, e))} key={item.id}/>
  })
}
  render() {
    return (
     <Container fluid={true}>
       <Row className="justify-content-around">
        {this.makeItems(this.state.items)}
       </Row>
     </Container>
    )
  }}


export default Carousel