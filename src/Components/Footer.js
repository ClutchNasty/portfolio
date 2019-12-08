import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Footer() {
  return(
    <footer className="mt-5 border-top">
      <Container fluid={true}>
        <Row>
          <Col className="p-2" md={3} sm={12}>
            Devyn Gish
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer