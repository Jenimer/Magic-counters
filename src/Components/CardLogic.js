import React from 'react';
import { Button } from 'semantic-ui-react';

class CardLogic extends React.Component {

 state = { value: 0 }
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

  reset = () => {
   this.setState( () => {
     return { value: 0 }
   });
  }

  render() {

    return (
        <div>
            <p>{this.state.value}</p>
            <Button onClick={this.inc}>+</Button>
            <Button onClick={this.dec}>-</Button>
            <Button onClick={this.reset}>Reset</Button>
        </div>
    );
  }
}

export default CardLogic;