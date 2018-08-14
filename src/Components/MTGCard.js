import React from 'react';
import CardLogic from './CardLogic';
import { Segment, Divider } from 'semantic-ui-react'


class MTGCard extends React.Component{
  render() {

    return (
        <div>
        <Segment color='purple' raised compact>
          <p>Counters</p>
           <CardLogic />
           <CardLogic />
        </Segment>
       <Divider />
        </div>
    );
  }
}

export default MTGCard;