<template>
  <div class="recovery-form">
    <div class="recovery-form__title">
      <h1>Can't access your account?</h1>
    </div>
    <el-alert
        title="If you can't access Jira, fill in this form and an email will be sent to you with the details to access your account again."
        type="info"
        :closable="false"
        class="recovery-form-alert"
        show-icon>
    </el-alert>
    <div class="recovery-form__body">
      <el-form ref="form" :model="form" :rules="rules" label-width="140px" size="mini">
        <el-form-item label="Which did you forget" class="recovery-form-item">
          <el-radio-group v-model="form.radio" @change="changeType">
            <el-radio label="Password" class="recovery-form-radio"></el-radio>
            <br>
            <el-radio label="Username" class="recovery-form-radio"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item v-bind:label="this.form.inputType" prop="inputType" class="recovery-form-item">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item class="recovery-form-item">
          <el-button type="primary" @click="onSubmit">Send</el-button>
          <router-link to="/" class="ml-10">
            <el-link type="primary" :underline="false">Cancel</el-link>
          </router-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
name: "recovery-form",
  data: () => ({
    form: {
      radio: 'Password',
      inputType: 'Username'
    },
    rules: {
      inputType: [
        { required: true},
      ]
    },
  }),
  methods: {
    changeType(){
      this.form.radio === 'Password' ? this.form.inputType = 'Username' : this.form.inputType = 'Email'
    },
    onSubmit(){
      console.log(1)
    }
  }
}
</script>

<style lang="scss" scoped>
.recovery-form {
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

    }
  }
  a {
    font-weight: normal;
    text-decoration: none;
  }
  button {
    margin-top: 5px;
  }
}
</style>