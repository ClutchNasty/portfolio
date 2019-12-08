import React from 'react'
import Button from "react-bootstrap/Button"


class Increment extends React.Component {

  state = {
    counter: 0
  }

  handleInc = () => {
      this.setState({
        counter: this.state.counter + 1
      }
     )
  }
  handleDec = () => {
    this.setState({
      counter: this.state.counter - 1
    }
   )
}

  //  handleMult = () => {
  //    this.setState({
  //      counter: this.state.counter * 2
  //     }
  //    )
  //  }

  render() {
    return (
      <div className="styless">
        <Button onClick={this.handleInc}>Increment</Button>
        <br />
        
        <br />
        <h1>{this.state.counter}</h1>
        <br />
  
        <Button onClick={this.handleDec}>Decrement</Button>
        <br />
        
        {/* <Button onClick={this.handleMult}>multiplier</Button> */}
      </div>
    )
  }
}


export default Increment
