import React, { Component } from 'react'

export default class NumericText extends Component {
  handleReverse = () => {

  }
  
  render() {
    const {inputOriginalValue} = this.props;
    const arrayValue = inputOriginalValue.toUpperCase().split('');
    const numericText = arrayValue.map(char => {
      if (char === 'A') return '4';
      if (char === 'O') return '0';
      if (char === 'L') return '1';
      if (char === 'E') return '3';
      if (char === 'S') return '5';
      if (char === 'T') return '7';
      else return char;
    }).join('');

    return (
      <div>
        <p>
          Texto Numérico:
        </p>
        <input type="text" value={numericText} readOnly></input>
      </div>
    )
  }
}
