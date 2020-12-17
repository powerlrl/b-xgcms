<template>
  <div class="login d-flex">
    <!-- 登录组件 -->
    <div class="form-left d-flex ai-center jc-center">
      <h2>Welcom Back!</h2>
      <p>校园疫情物资管理调度平台</p>
    </div>
    <el-form
      :model="loginForm"
      ref="loginRef"
      :rules="loginRules"
      class="form-right"
    >
      <h2>登录</h2>
      <span>请使用账号密码登录</span>
      <div class="inputBox">
        <el-form-item prop="username" class="username">
          <el-input
            type="text"
            placeholder="账号"
            v-model="loginForm.username"
            suffix-icon="el-icon-s-custom"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password" class="password">
          <el-input
            type="password"
            placeholder="密码"
            v-model="loginForm.password"
            suffix-icon="el-icon-view"
          ></el-input>
        </el-form-item>
      </div>
      <el-form-item class="radio-group">
        <el-radio-group v-model="loginForm.radio">
          <el-radio :label="3">管理员</el-radio>
          <el-radio :label="6">学生</el-radio>
          <el-radio :label="9">教师</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-button class="login-btn" @click="submitLogin('loginRef')"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
        radio: 3,
      },
      loginRules: {
        username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitLogin(formName) {
      console.log(this.$refs[formName])
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert("submit!");
          // 登录成功发生跳转
          this.$router.push('/home')
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
.login {
  width: 650px;
  height: 400px;
  margin: 100px auto;
  box-shadow: 5px 5px 15px 10px #eee;
}
.form-left {
  width: 50%;
  height: 100%;
  background: #3da4db;
  border-radius: 8px;
  flex-direction: column;
  color: #f5f6f5;
}
.form-left p {
  font-size: 13px;
}
.form-right {
  box-sizing: border-box;
  /* padding: 30px; */
  text-align: center;
  margin-left: 25px;
}
/* 右边的部分 */
.form-right,
.username,
.password {
  margin-top: 20px;
  width: 270px;
}
.radio-group {
  margin-top: 30px;
}
.login-btn {
  border-radius: 10px;
  width: 200px;
  color: #fff;
  background: #fe492a;
  margin-top: 20px;
}
</style>
