# vue-gql

Vue is a modern JavaScript framework for building single-page applications. Apollo Client is a fully-fledged GraphQL client and state management library. In this project, I’ll create a SPA with Vue, GraphQL, and Apollo Client using the latest versions of Apollo Client and Vue Apollo. Also, I used Vuex for state management.

Example mutation:

```
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
```
Example query:

```
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
```


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
