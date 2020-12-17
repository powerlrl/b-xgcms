<template>
  <div class="login d-flex">
    <!-- 登录组件 -->
    <div class="form-left d-flex ai-center jc-center">
      <h2>Welcom Back!</h2>
      <p>校园疫情物资管理调度平台</p>
    </div>
    <div class="form-right">
      <h2>登录</h2>
      <span>请使用账号密码登录</span>
      <div class="inputBox">
        <div class="username">
          <el-input
            type="text"
            placeholder="账号"
            suffix-icon="el-icon-s-custom"
          ></el-input>
        </div>
        <div class="password">
          <el-input
            type="password"
            placeholder="密码"
            suffix-icon="el-icon-view"
          ></el-input>
        </div>
      </div>
      <div class="radio-group">
        <el-radio-group v-model="radio">
          <el-radio :label="3">管理员</el-radio>
          <el-radio :label="6">学生</el-radio>
          <el-radio :label="9">教师</el-radio>
        </el-radio-group>
      </div>
      <el-button class="login-btn">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {};
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
