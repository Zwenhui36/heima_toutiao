<template>
  <div>
    <!-- 首页缓存 页面离开不会销毁 -->
    <keep-alive include="Home">
      <!-- 路由占位符 -->
      <router-view></router-view>
    </keep-alive>

    <!-- Tabbar区域 -->
    <van-tabbar active-color="#4A92F7" inactive-color="#000" route>
      <van-tabbar-item icon="home-o" replace to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="user-circle-o" replace to="/user"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scoped></style>
