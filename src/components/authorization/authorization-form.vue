<template>
  <div class="authorization-form">
    <div class="authorization-form__title">
      <h1>Welcome to DC Jira</h1>
    </div>
    <el-alert
        class="mb-20"
        type="error"
        description="Sorry, your username and password are incorrect - please try again."
        show-icon
        :closable="false"
        v-if="!success"
    >
    </el-alert>
    <div class="authorization-form__body">
      <el-form ref="from" :model="form" label-width="150px" size="mini">
        <el-form-item label="Username">
          <el-input v-model="form.username" class="w-200" accesskey="u"></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="form.password" class="w-200" accesskey="p"></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="form.remember" label="Remember my login on this computer"></el-checkbox>
        </el-form-item>
        <div class="authorization-form__help">
          <p>Not a member? To request an account, please contact your Jira administrator</p>
        </div>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Log In</el-button>
          <router-link to="/" class="ml-10">
            <el-link type="primary" :underline="false">Can't access your account?</el-link>
          </router-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthorizationForm",
  data: () => ({
    form: {
      username: '',
      password: '',
      remember: false,
    },
    success: true,
  }),
  methods: {
    onSubmit() {
      this.success = !(!this.form.username && !this.form.password);
      console.log(`Username: ${this.form.username} Password: ${this.form.password}`)
    },
  }
}
</script>

<style lang="scss" scoped>
.authorization-form {
  border-radius: 5px;
  border: 1px solid #c1c7d0;
  width: 500px;
  height: 100%;
  background-color: white;
  margin: 50px auto 0;
  padding: 40px;

  &__title {
    h1 {
      font-size: 24px;
      color: #172b4d;
      font-weight: 500;
      margin-top: 0;
    }
  }
  &__body {
    div {
      margin-bottom: 5px;
    }
  }
  &__help {
    font-size: 14px;
    width: 360px;
    margin: 0 0 10px 150px !important;
    color: #142440;
  }
  a {
    font-weight: normal;
    text-decoration: none;
  }
  p {
    margin: 0;
  }
}

</style>