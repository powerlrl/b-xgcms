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
      <el-input type="text"></el-input>
      <el-input type="password"></el-input>
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
</style>
