import React, { Component } from 'react';
import CamelCase from './components/CamelCase';
import ConsoantsOnly from './components/ConsoantsOnly copy';
import Csv from './components/Csv';
import NumericText from './components/NumericText';
import Reverse from './components/Reverse';
import Slug from './components/Slug';
import VogalsOnly from './components/VogalsOnly';


export default class App extends Component {
  constructor() { 
    super();

    this.state = {
      userInput: '',

    }

  }


  handleInputChange = (event) => {
    const newValue = event.target.value;


    this.setState({
      userInput: newValue,
    })
    //console.log(newValue);
  }


  render() {
    const {userInput} = this.state;
    return (
    <div className="container">
    <h3 className="center">react-text-transformer</h3>
    <p>
          Digite um texto qualquer:
        </p>
        <input
        type="text"
        value={userInput}
        onChange={this.handleInputChange}
        ></input>
    <h4 className="center">Transformações</h4>
    <Reverse inputOriginalValue={userInput} />
    <NumericText inputOriginalValue={userInput} />
    <Csv inputOriginalValue={userInput} />
    <Slug inputOriginalValue={userInput} />
    <VogalsOnly inputOriginalValue={userInput} />
    <ConsoantsOnly inputOriginalValue={userInput} />
    <CamelCase inputOriginalValue={userInput} />
    </div>
    );
  }
}
