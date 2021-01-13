import React, { Component } from 'react'

export default class Csv extends Component {
  handleReverse = () => {

  }
  
  render() {
    const {inputOriginalValue} = this.props;
    const textCsv = inputOriginalValue.split(' ').map(word => {
      return `"${word}"`
    }).join(';');

    return (
      <div>
        <p>
          CSV:
        </p>
        <input 
        type="text"
        value={textCsv}
        readOnly
        ></input>
      </div>
    )
  }
}
