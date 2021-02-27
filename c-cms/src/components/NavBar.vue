<template>
  <div class="navbar">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>人员管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">人员信息</el-menu-item>
          <!-- <el-menu-item index="1-2">选项2</el-menu-item> -->
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">物资分类</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-document-copy"></i>
        <span slot="title">物资统计</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen() {},
    handleClose() {},
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
  },
};
</script>

<style scoped>
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-aside ul {
  width: 200px;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
}
</style>
