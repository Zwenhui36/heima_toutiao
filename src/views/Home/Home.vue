<template>
  <div class="home-container">
    <van-nav-bar title="杰哥资讯" fixed />
    <!-- 导入、注册、使用ArticleInfo组件 -->
    <!--在使用组件的时候，如果某个属性名是“小驼峰”形式，则绑定属性的时候，建议改写成“连字符”格式。-->
    <!-- 例如:cmtCount建议写成cmt-count -->
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <!-- 公告栏 -->
    <van-notice-bar
      color="#1989fa"
      background="#ecf9ff"
      left-icon="info-o"
      text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
    />
    <!-- 搜索栏 -->
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <!-- 上拉刷新 -->
    <van-pull-refresh
      v-model="isLoading"
      :disabled="finished"
      @refresh="onRefresh"
    >
      <!-- 下拉加载 -->
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="^_^没有更多了^_^"
        @load="onLoad"
      >
        <ArticleInfo
          v-for="item in artlist"
          :key="item.id"
          :title="item.title"
          :aut_name="item.aut_name"
          :cmt-count="item.comm_count"
          :pubdate="item.pubdate"
          :cover="item.cover"
        >
        </ArticleInfo
      ></van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
// 按需导入API接口
import { getArticleListAPI } from '@/api/articleAPI.js'

// 导入需要的组件
import ArticleInfo from '@/components/Article/ArticleInfo.vue'
import _ from 'lodash'
let fn = null
export default {
  name: 'Home',
  data() {
    return {
      // 页码值
      page: 1,
      // 每一页显示多少条数据
      limit: 10,
      // 文章的数组
      artlist: [],
      // 通过getArticleListAPI得到res中的images数据
      images: [],
      // 往下拉加载数据
      // 是否正在加载下一页数据，如果loading为true，则不会反复出发load事件
      // 每当下一页数据请求回来之后，需要把loading从 true 改为 false
      loading: true,
      // 所有数据加载完毕之后，如果没有更多的数据了，一定要把finished改为true
      finished: false,
      // 上拉刷新
      isLoading: false,
      // 搜索框
      value: ''
    }
  },
  created() {
    this.initArticleList()
  },
  activated() {
    fn = this.recordTopHandler()
    window.addEventListener('scroll', fn)
  },
  deactivated() {
    window.removeEventListener('scroll', fn)
  },
  methods: {
    // 封装获取文章列表数据的方法
    async initArticleList(isRefresh) {
      // 发起 GET 请求，获取文章的列表数据
      const { data: res } = await getArticleListAPI(this.page, this.limit)
      // 打印输入响应的数据结构
      // console.log(res)

      // 传参给Artlist
      // this.artlist = res
      // 将第一页的第一个新闻图片当作轮播图的图片来源
      if (res.length !== 0) {
        if (res[0].art_id === '8163') {
          this.images = res[0].cover.images
        }
      }

      if (isRefresh) {
        // 证明是下拉刷新，【新数据在前，旧数据在后】
        this.artlist = [...res, ...this.artlist]
        this.loading = false
      } else {
        // 如果是上拉加载更多， 【旧数据在前，新数据在后】
        this.artlist = [...this.artlist, ...res]
        // 每当下一页数据请求回来之后，需要把loading从 true 改为 false
        this.loading = false
      }

      // 证明没有下一页数据了，直接要把finished改为true,表示数据加载完毕了
      if (res.length === 0) {
        this.finished = true
      }
    },
    // 只要onLoad被调用，就请求下页数据
    onLoad() {
      console.log('触发了load事件')
      // 让页码值+1
      this.page++
      // 重新请求接口获取数据
      this.initArticleList()
    },
    // 上拉刷新
    onRefresh() {
      console.log('触发了onRefresh事件')
      // 让页码值+1
      this.page++
      // 重新请求接口获取数据
      this.initArticleList(true)
      setTimeout(() => {
        this.isLoading = false
      }, 1000)
    },
    // 缓存
    recordTopHandler() {
      return _.debounce(
        () => {
          this.$route.meta.top = window.scrollY
        },
        50,
        { trailling: true }
      )
    },
    // 搜索框
    onSearch(val) {
      console.log(val)
    },
    onCancel() {
      console.log('触发了取消点击')
    }
  },
  components: {
    ArticleInfo
  }
}
</script>

<style lang="less" scoped>
// 轮播图
img {
  width: 100%;
  height: 219px;
}
.home-container {
  padding: 46px 0 50px 0;
}
</style>
