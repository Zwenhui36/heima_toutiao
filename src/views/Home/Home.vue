<template>
  <div class="home-container">
    <van-nav-bar title="杰哥资讯" fixed />
    <h3>4</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>4</h3>
  </div>
</template>

<script>
import { getArticleListAPI } from '@/api/articleAPI.js'
export default {
  name: 'Home',
  data() {
    return {
      // 页码值
      page: 1,
      // 每一页显示多少条数据
      limit: 10
    }
  },
  created() {
    this.initArticleList()
  },
  methods: {
    // 封装获取文章列表数据的方法
    async initArticleList() {
      // 发起 GET 请求，获取文章的列表数据
      const { data: res } = await getArticleListAPI(this.page, this.limit)
      // 打印输入响应的数据结构
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding: 46px 0 50px 0;
}
.van-nav-bar {
  background-color: #4a92f7;
}
// 第三方组件 原有样式覆盖不了 就在前面加/deep/
/deep/ .van-nav-bar__title {
  color: rgb(255, 255, 255);
}
</style>
