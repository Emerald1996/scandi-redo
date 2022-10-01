import React, { Component } from 'react'
import FETCH_PRODUCTS from '../FetchQuery/productList'
import { Query } from '@apollo/client/react/components'
import Error from '../Components/Error'
import Loading from '../Components/Loading'
import ProductLists from '../Components/ProductLists'

export class CategoryPage extends Component {
  render() {
    return (
      <>
        <div>
          <Query query={FETCH_PRODUCTS}>
          {({data, error, loading})=>{
            if(error) return <Error/>
            if(loading) return <Loading/>
            if(data) console.log("data", data); return (
              <div>
                {data.categories.map((category, index)=>{
                  return <div key={index}>
                    <ProductLists categoryName={category.name} products={category.products}/>
                  </div>
                })}
              </div>
            )
          }}

          </Query>
        </div>
      </>
    )
  }
}

export default CategoryPage