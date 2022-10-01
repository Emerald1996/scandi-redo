import React, { Component } from 'react'

export class DisplayProduct extends Component {
  render() {
    const {products} = this.props
    return (
      <div>{products.name}</div>
    )
  }
}

export default DisplayProduct