import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
class App extends Component {
 state = {value: 0}
  
  inc = () => {
    this.setState( (state) => {
      return { value: state.value + 1 }
   });
  }
   
  dec = () => {
    this.setState( (state) => {
      return { value: state.value - 1 }
   });
  }
  render() {

    return (
        <Card>
            Magic card counter
            <p>{this.state.value}</p>
          
            <Button onClick={this.inc}>+</Button>
            <Button onClick={this.dec}>-</Button>
        </Card>
    );
  }
}

export default App;
