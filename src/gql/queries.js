import gql from "graphql-tag";

export const AUTHENTICATED_USER = gql`
  query AUTH_USER {
    authUserProfile {
      edges {
        node {
          id
          email
          username
          password
        }
      }
    }
  }
`;
