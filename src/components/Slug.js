import React, { Component } from 'react'

export default class Slug extends Component {
  handleReverse = () => {

  }
  
  render() {
    const {inputOriginalValue} = this.props;
    const slugText = inputOriginalValue.toLowerCase().split(' ').join('-');
    return (
      <div>
        <p>
          Slug:
        </p>
        <input 
        type="text"
        value={slugText}
        readOnly
        ></input>
      </div>
    )
  }
}
