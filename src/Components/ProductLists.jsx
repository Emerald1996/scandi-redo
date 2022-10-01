import React, { Component } from 'react'
import DisplayProduct from "./DisplayProduct"

export class ProductLists extends Component {
  render() {
    const {categoryName , products} = this.props
  
    return (
      <main>
        {categoryName && 
        <h1 style={{textAlign: 'center', color: 'black'}}>
            {categoryName.toUpperCase()}
        </h1>} 

        {products && products.map((product)=>{
            return (
              <DisplayProduct
              key={product.id}
              products={product}
              />
            )
        })}

      </main>
    )
  }
}

export default ProductLists