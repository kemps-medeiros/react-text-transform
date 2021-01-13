import React, { Component } from 'react'

export default class VogalsOnly extends Component {
  handleReverse = () => {

  }
  
  render() {
    const {inputOriginalValue} = this.props;
    const array = inputOriginalValue.split('');
    const vogalsText = array.map(char => 
      {
      if (char === 'a' | char === 'A') return char
      if (char === 'e' | char === 'E') return char
      if (char === 'i' | char === 'I') return char
      if (char === 'o' | char === 'O') return char
      if (char === 'u' | char === 'U') return char
      if (char === ' ') return ' '
      else return ""
    }).join('');

    return (
      <div>
        <p>
          Somente Vogais:
        </p>
        <input 
        type="text"
        value={vogalsText}
        readOnly
        ></input>
      </div>
    )
  }
}
