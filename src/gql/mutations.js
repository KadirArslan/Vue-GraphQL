import gql from "graphql-tag";

export const REGISTER_USER = gql`
  mutation REGISTER_USER(
    $email: String!
    $password: String!
    $username: String!
  ) {
    registerUser(email: $email, username: $username, password: $password) {
      user {
        id
        username
        email
      }
      token
    }
  }
`;

export const AUTHENTICATE_USER = gql`
  mutation AUTHENTICATEUSER($username: String!, $password: String!) {
    authenticateUser(username: $username, password: $password) {
      token
      user {
        username
        password
      }
    }
  }
`;
