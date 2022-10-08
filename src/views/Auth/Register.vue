<template>
  <div class="auth-register">
    <div class="row">
      <div class="col md-6 col-sm-12 mx-auto">
        <div class="card">
          <div class="card-header">
            <h3 class="text-primary font-weight-bold">Register</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="signUpUser">
              <div class="form-group">
                <label
                  for="username"
                  class="text-primary font-weight-bold font-size-sm"
                  >Username</label
                >
                <input
                  type="text"
                  placeholder="Username"
                  class="form-control"
                  id="username"
                  v-model="user.username"
                />
                <label
                  for="email"
                  class="text-primary font-weight-bold font-size-sm"
                  >Email</label
                >
                <input
                  type="email"
                  placeholder="Email"
                  class="form-control"
                  id="email"
                  v-model="user.email"
                />

                <label
                  for="password"
                  class="text-primary font-weight-bold font-size-sm"
                  >Password</label
                >
                <input
                  type="password"
                  placeholder="Password"
                  class="form-control"
                  id="password"
                  v-model="user.password"
                />
              </div>
              <br />
              <div class="form-group">
                <button class="btn btn-primary btn-block">
                  Register
                </button>
              </div>
              <br />
              <div class="form-group">
                <routerLink to="/auth/login">
                  Already have an account? Login Now!
                </routerLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
        email: "",
      },
    };
  },
  methods: {
    ...mapActions({
      registerUser: "Auth/registerUser",
    }),
    signUpUser() {
      console.log("USER", this.user);
      this.registerUser(this.user);
    },
  },
};
</script>

<style></style>
