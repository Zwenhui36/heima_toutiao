<template>
  <div>
    <!-- 路由占位符 -->
    <router-view></router-view>

    <!-- Tabbar区域 -->
    <van-tabbar active-color="#82C3FF" inactive-color="#000" route>
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
