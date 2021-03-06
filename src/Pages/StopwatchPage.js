import React from 'react';
import Clock from "../Components/Clock";
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

class Stopwatch extends React.Component {
  state = { showClock: false, };

  toggleShowClock = () => {
    this.setState( 
       { showClock: !this.state.showClock }
    )
  }

  render() {
    return (
      <Container style={{ marginTop: "25px", }}>
        { this.state.showClock && <Clock /> }
        <Button onClick={this.toggleShowClock} color="purple">Toggle Clock</Button>
      </Container>
    );
  }
}

export default Stopwatch;


// import React from "react"
// import Button from "react-bootstrap/Button"


// class Stopwatch extends React.Component {
//   state = {
//     status: false,
//     runningTime: 0
//   }
//   handleClick = () => {

//     this.setState(state => {
//       if (state.status) {
//         clearInterval(this.timer);
//       } else {

//         const startTime = Date.now() - this.state.runningTime;

//         this.timer = setInterval(() => {
//           this.setState({ runningTime: Date.now() - startTime });
//         });
//       }
//       return { status: !state.status };
//     });
//   };
//   handleReset = () => {
//     this.setState({ runningTime: 0, running: false })
//   }
//   render() {
//     const { status, runningTime } = this.state
//     return (
//       <div className="styless">
//         <h1>{runningTime}ms</h1>
//         <Button onClick={this.handleClick}>{status ? 'Stop' : 'Start'}</Button>
//         <Button onClick={this.handleReset}>Reset</Button>
//       </div>
//     )
//   }
// }

// export default Stopwatch