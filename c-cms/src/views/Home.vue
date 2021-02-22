<template>
  <div class="home">
    <el-container>
      <el-aside style="width: 200px;">
        <nav-bar />
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
// import MainHome from "@/components/MainHome";

export default {
  components: {
    NavBar,
    // MainHome,
  },
};
</script>

<style>
</style>
