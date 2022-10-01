import { gql } from "@apollo/client";

const FETCH_CATEGORIES = gql`
  query {
    categories {
      name
    }
  }
`;

export default FETCH_CATEGORIES;
