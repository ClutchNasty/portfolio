import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Sample(props) {
  return (
  <Jumbotron className="bg-transparent jumbotron-fluid p-3">
    <Container fluid={true}>
      <Row className="justify-content-center py-5">
        <Col md={6}>
           { <h1 className="display-3 font-weight-bolder"> {props.title}  </h1> }
           { <h2 className="display-4 font-weight-light"> {props.subTitle} </h2> }
           { <h3 className="lead font-weight-light"> {props.text} </h3> }
        </Col>
      </Row>
    </Container>
  </Jumbotron>
  )
}
export default Sample