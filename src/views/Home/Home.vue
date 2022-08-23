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
export default {
  name: 'Home'
}
</script>

<style lang="less" scoped>
.home-container {
  padding: 46px 0 50px 0;
}
.van-nav-bar {
  background-color: #82c3ff;
}
// 第三方组件 原有样式覆盖不了 就在前面加/deep/
/deep/ .van-nav-bar__title {
  color: rgb(255, 255, 255);
}
</style>
