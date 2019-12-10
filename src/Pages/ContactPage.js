import React from 'react'
import Sample from "../Components/Sample"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Content from "../Components/Content"



class ContactPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null
    }
  }

  handleChange = (e) => {
    const target = e.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.name

    this.setState({
        [name]: value,
      }
    )
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.setState({
      disabled: true,
      emailSent: false
    })
  }

  render() {
    return (
      <div >
        <Sample title={this.props.title} />
        <Content>
          <Form className="navbar" onSubmit={this.handleSubmit}>
            <Form.Group  class="font-weight-bold">

              <Form.Label  htmlFor="full-name">
                Full Name:
                <Form.Control  
                  id="full name"
                  name="name"
                  type="text"
                  value={this.state.name}
                  onChange={this.handleChange} />
              </Form.Label>
              <br />
              <Form.Label  htmlFor="email">
                Email:
                <Form.Control   
                  id="email"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange} />
              </Form.Label>
              <br />
              <Form.Label  htmlFor="message">
                Message
                <Form.Control
                
                  id="mesage"
                  name="message"
                  as="textarea"
                  rows="3"
                  value={this.state.message}
                  onChange={this.handleChange} />
              </Form.Label>
              <br />
            </Form.Group>

           
            <Button 
              className="d-inline-block" 
              variant="primary" 
              type="submit" 
              disabled={this.state.disabled}>Send
            </Button>

            {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent!</p>}
            {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent!</p>}
          </Form>
        </Content>
      </div>
    )
  }
}
export default ContactPage