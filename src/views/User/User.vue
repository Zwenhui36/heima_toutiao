<template>
  <div>
    <div class="user-container">
      <!-- 用户基本信息面板 -->
      <div class="user-card">
        <!-- 用户头像、姓名 -->
        <van-cell>
          <!-- 使用 title 插槽来自定义标题 -->
          <template #icon>
            <img src="../../assets/logo.png" alt="" class="avatar" />
          </template>
          <template #title>
            <span class="username">{{ autname }}</span>
          </template>
          <template #label>
            <van-tag color="#fff" text-color="#007bff">申请认证</van-tag>
          </template>
        </van-cell>
        <!-- 动态、关注、粉丝 -->
        <div class="user-data">
          <div class="user-data-item">
            <span>0</span>
            <span>动态</span>
          </div>
          <div class="user-data-item">
            <span>0</span>
            <span>关注</span>
          </div>
          <div class="user-data-item">
            <span>0</span>
            <span>粉丝</span>
          </div>
        </div>
      </div>

      <!-- 操作面板 -->
      <van-cell-group class="action-card">
        <van-cell icon="edit" title="编辑资料" is-link @click="gouserinfo" />
        <van-cell icon="chat-o" title="小思同学" is-link />
        <van-cell icon="warning-o" title="退出登录" is-link />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
// 按需导入API接口
import { getArticleListAPI } from '@/api/articleAPI.js'
export default {
  name: 'User',
  data() {
    return {
      // 页码值
      page: 1,
      // 每一页显示多少条数据
      limit: 1,
      autname: ''
    }
  },
  created() {
    this.initArticleList()
  },
  methods: {
    // 封装获取文章列表数据的方法
    async initArticleList(isRefresh) {
      // 发起 GET 请求，获取文章的列表数据
      const { data: res1 } = await getArticleListAPI(this.page, this.limit)
      // 打印输入响应的数据结构
      // console.log(res1[0].aut_name)

      // 传参给Artlist
      this.autname = res1[0].aut_name
    },
    gouserinfo() {
      this.$router.push('/userInfo/')
    }
  }
}
</script>

<style lang="less" scoped>
.user-container {
  .user-card {
    background-color: #4a92f7;
    color: white;
    padding-top: 20px;
    .van-cell {
      background: #4a92f7;
      color: white;
      &::after {
        display: none;
      }
      .avatar {
        width: 60px;
        height: 60px;
        background-color: #fff;
        border-radius: 50%;
        margin-right: 10px;
      }
      .username {
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
  .user-data {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 14px;
    padding: 30px 0;
    .user-data-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 33.33%;
    }
  }
}
</style>
