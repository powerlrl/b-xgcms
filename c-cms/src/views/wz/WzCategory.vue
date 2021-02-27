<template>
  <div class="create-user">
    <div class="c-serach-bar">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple d-flex">
            <div style="width: 100px;" class="search-item">用户名:</div>
            <el-input type="text" size="small" placeholder="请输入用户名" />
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple d-flex">
            <div style="width: 120px;" class="search-item">人员类型：</div>
            <el-input type="text" size="small" placeholder="请选择人员的类型" />
          </div>
        </el-col>
        <el-col :span="6">
          <el-button type="primary" icon="el-icon-search" size="small"
            >搜索</el-button
          >
        </el-col>
      </el-row>
    </div>
    <!-- 表格部分 -->
    <div style="margin-top: 30px; text-align: right">
      <el-button size="mini" type="primary" @click="addUser"
        >添加人员</el-button
      >
    </div>
    <div class="c-container">
      <el-table
        :data="tableData"
        style="width: 100%"
        :cell-style="{ textAlign: 'center' }"
        :header-cell-style="{ background: '#fafafa', textAlign: 'center' }"
      >
        <el-table-column label="用户名" width="200">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.username }}</span>
          </template>
        </el-table-column>
        <el-table-column label="密码" width="200">
          <template slot-scope="scope">
            <span>{{ scope.row.password }}</span>
          </template>
        </el-table-column>
        <el-table-column label="性别" width="200">
          <template slot-scope="scope">
            <span>{{ scope.row.sex }}</span>
          </template>
        </el-table-column>
        <el-table-column label="手机号" width="200">
          <template slot-scope="scope">
            <span>{{ scope.row.phone }}</span>
          </template>
        </el-table-column>
        <el-table-column label="人员类型" width="200">
          <template slot-scope="scope">
            <el-tag size="medium">{{ scope.row.usertype }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="paginatioin">
        <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination>
      </div>
    </div>

    <!-- 弹出模态框 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleCloseDialog"
    >
      <el-form ref="addForm" :model="addForm" label-width="80px">
        <el-form-item label="姓名:">
          <el-input v-model="addForm.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible: false,
      addForm: {},
      tableData: [
        {
          username: "yo1",
          password: "111",
          sex: "女",
          phone: 1398939384,
          usertype: "管理员"
        },
        {
          username: "yo1",
          password: "111",
          sex: "女",
          phone: 1398939384,
          usertype: "管理员"
        },
        {
          username: "yo1",
          password: "111",
          sex: "女",
          phone: 1398939384,
          usertype: "管理员"
        },
        {
          username: "yo1",
          password: "111",
          sex: "女",
          phone: 1398939384,
          usertype: "管理员"
        }
      ]
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    addUser() {
      this.dialogVisible = true;
      // console.log("添加人员")
    },
    handleCloseDialog() {
      this.dialogVisible = false;
    }
  }
};
</script>
<style scoped>
.c-serach-bar {
  font-size: 15px;
}
.search-item {
  color: #555555;
}
.c-container {
  margin-top: 30px;
}
.paginatioin {
  margin-top: 30px;
  width: 100%;
  text-align: right;
}
.d-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>