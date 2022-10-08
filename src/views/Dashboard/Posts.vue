<template>
  <div class="dashboard-posts">
    <h3 class="text-primary">Dashboard Posts</h3>
    <ApolloQuery
      :query="
        (gql) => gql`
          query {
            userNotes {
              edges {
                node {
                  id
                  note
                }
              }
            }
          }
        `
      "
    >
      <template v-slot="{ result: { data, error, loading } }">
        <div v-if="loading"><p>Loading....</p></div>
        <div v-else-if="error"><p>Ooopss there is a error</p></div>
        <div v-else-if="data">
          Posts component
          <Posts :posts="data.userNotes.edges" />
          TEST DATA
          <pre>{{ data }}</pre>
        </div>
        <div v-else>No result</div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
import Posts from "@/components/Posts/Posts.vue";
export default {
  components: {
    Posts,
  },
};
</script>
