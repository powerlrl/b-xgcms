<template>
  <div class="main-home">
    main部分
    <!-- 封装的一个导航栏 -->
    <!-- <tab-bar>
      <tab-bar-item  v-for="(item,index) in tabData" 
      :key="item" 
      >
        <div slot="item-text" @click="handleClick(index)">{{ item }}</div>
      </tab-bar-item>
    </tab-bar> -->

    <!-- 下面的表格 -->
    <el-tabs type="border-card">
      <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i> 我的行程</span>
        我的行程
      </el-tab-pane>
      <el-tab-pane label="消息中心">
        <tablem :tableData="tableData" :tableDataKey="tableDataKey"></tablem>
      </el-tab-pane>
      <el-tab-pane label="角色管理">
        <tablem :tableData="tableData2" :tableDataKey="tableDataKey2"></tablem>
      </el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
      <el-tab-pane label="消息中心">消息中心</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import TabBar from "components/content/TabBar";
import TabBarItem from "components/content/TabBarItem";
import Tablem from 'components/content/Tablem'
export default {
  data() {
    return {
      tabData: ["我的", "首页", "个人中心"],
      currentIndex: 0,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      tableDataKey: [
        {
          prop: 'date',
          propName: '日期',
        },
        {
          prop: 'name',
          propName: '名称'
        },
        {
          prop: 'address',
          propName: '地址'
        }
      ],
      tableData2: [
        {
          username: 'xiaolin',
          password: '342342',
          habby: '打篮球',
          sex: '女'
        }
      ],
      tableDataKey2: [
        {
          prop: 'username',
          propName: '用户名',
        },
        {
          prop: 'password',
          propName: '密码',
        },
        {
          prop: 'habby',
          propName: '爱好'
        },
        {
          prop: 'sex',
          propName: '性别'
        }
      ]
    };
  },
  methods: {
    handleClick() {
      console.log(index);
    }
  },
  components: {
    TabBar,
    TabBarItem,
    Tablem,
  }
};
</script>
<style scoped>
.active {
  background: purple;
}
</style>
