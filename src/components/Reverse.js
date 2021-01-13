import React, { Component } from 'react'

export default class Reverse extends Component {
  handleReverse = () => {

  }
  
  render() {
    const {inputOriginalValue} = this.props;
    const reverseValue = inputOriginalValue.split('').reverse().join('')
    return (
      <div>
        <p>
          Texto invertido:
        </p>
        <input 
        type="text"
        value={reverseValue}
        readOnly
        ></input>
      </div>
    )
  }
}
