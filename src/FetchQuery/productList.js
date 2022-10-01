import { gql } from "@apollo/client";

const FETCH_PRODUCTS = gql`
 query {
    categories {
      name
      products {
        id
        name
        brand
        inStock
        gallery
        description
        prices {
          amount
          currency {
            symbol
            label
          }
        }
        attributes {
          type
          name
          items {
            value
            displayValue
            id
          }
        }
      }
    }
  }
`;
export default FETCH_PRODUCTS
