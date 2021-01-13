import React, { Component } from 'react'

export default class ConsoantsOnly extends Component {
  handleReverse = () => {

  }
  
  render() {
    const {inputOriginalValue} = this.props;
    const array = inputOriginalValue.split('');
    const consoantsText = array.map(char => 
      {
      if (char === 'a' | char === 'A') return ''
      if (char === 'e' | char === 'E') return ''
      if (char === 'i' | char === 'I') return ''
      if (char === 'o' | char === 'O') return ''
      if (char === 'u' | char === 'U') return ''
      if (char === ' ') return ' '
      else return char
    }).join('');

    return (
      <div>
        <p>
          Somente Consoantes:
        </p>
        <input 
        type="text"
        value={consoantsText}
        readOnly
        ></input>
      </div>
    )
  }
}
