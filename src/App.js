import React, { Component } from 'react';
import MTGCard from './Components/MTGCard'


class App extends Component {
 
  render() {

    return (
       <div>
        <MTGCard />
        <MTGCard />
        <MTGCard />
        <MTGCard />
        <MTGCard />
        <MTGCard />
       </div>
    )
  }
}

export default App;
