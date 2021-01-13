import React, { Component } from 'react'

export default class CamelCase extends Component {
  handleReverse = () => {

  }
  
  render() {
    const {inputOriginalValue} = this.props;
    const camelCase = inputOriginalValue.split(' ')
    .map((word, index) => {
      return index === 0
      ? word.toLowerCase()
      : word.toLowerCase().split('')
      .map((char, index) => {
        return index === 0 
        ? char.toUpperCase()
        : char;
      }).join('');
    }).join('');

    return (
      <div>
        <p>
          Variável:
        </p>
        <input 
        type="text"
        value={camelCase}
        readOnly
        ></input>
      </div>
    )
  }
}
