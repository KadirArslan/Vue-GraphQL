<template>
  <div class="posts">
    <div class="row">
      <div
        class="col-md-6 col-sm-12 h-100"
        v-for="post in posts"
        :key="post.id"
      >
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">{{ post.node.note }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
