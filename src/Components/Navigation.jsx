import React, { Component } from 'react'
import { Query } from "@apollo/client/react/components";
import FETCH_CATEGORIES from '../FetchQuery/categories'
import Error from "./Error"
import Loading from "./Loading"
import "../Styles/Navigation.css"
import { Link } from 'react-router-dom';


export class Navigation extends Component {
  render() {
    return (
      <>
        <div>
          <Query query={FETCH_CATEGORIES}>
            {({data, error, loading})=>{
              if(error) return <Error/>
              if(loading) return <Loading/>
              if(data) return(
                <div className='navigation'>
                  {data.categories.map((category , index)=>{
                    return(
                      <nav key={index} >
                        <ul >
                          <li>
                            <Link to={`/${category.name}`} className="links">{category.name.toUpperCase()}</Link>
                          </li>
                        </ul>
                      </nav>
                    )
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

export default Navigation