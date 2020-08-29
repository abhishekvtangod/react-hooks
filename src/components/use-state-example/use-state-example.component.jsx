import React, { useState } from 'react';

import Card from '../card/card.component';

const UseStateExample = () => {
    const [name, setName] = useState('Abhi');
    const [city, setCity] = useState('Bangalore');

    return(
        <Card>
            <h1>{ name }</h1>
            <h1>{ city }</h1>
            <button onClick={() => setName('Abhishek')}>Set Name to Abhishek</button>
            <button onClick={() => setCity('Hubli')}>Set City to Hubli</button>
        </Card>
    )

}

export class StateClassComponent extends React.Component {
    constructor() {
      super();
  
      this.state = {
        name: 'Abhi',
        city: 'Bangalore'
      };
    }
  
    render() {
      return (
        <Card>
          <h1> {this.state.name} </h1>
          <button onClick={this.setState({ name: 'Abhishek' })}>
          Set Name to Abhishek
          </button>
          <button onClick={this.setState({ address: 'Hubli' })}>
          Set City to Hubli
          </button>
        </Card>
      );
    }
}

export default UseStateExample;