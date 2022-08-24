<template>
  <div>
    <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <div class="title-box">
          <!-- 标题 -->
          <span>{{ title }}</span>
          <!-- 单张图片 -->
          <img
            :src="cover.images[0]"
            alt=""
            class="thumb"
            v-if="cover.type === 1"
          />
        </div>
        <!-- 三张图片 -->
        <div class="thumb-box" v-if="cover.type === 3">
          <img
            :src="item"
            alt=""
            class="thumb"
            v-for="(item, i) in cover.images"
            :key="i"
          />
        </div>
      </template>
      <!-- label 区域的插槽 -->
      <template #label>
        <div class="label-box">
          <span
            >作者:{{ aut_name }} &nbsp;&nbsp; 评论数:{{ cmtCount }} &nbsp;&nbsp;
            发布日期:{{ pubdate }}</span
          >
          <!-- 关闭按钮 -->
          <van-icon name="cross" />
        </div>
      </template>
    </van-cell>
    <!-- 自定义分割线 -->
    <van-divider
      :style="{ color: '#4a92f7', borderColor: '#1989fa', padding: '0 16px' }"
    >
      这是一个分割线
    </van-divider>
  </div>
</template>

<script>
export default {
  name: 'ArticleInfo',
  // 自定义属性
  props: {
    // 文章标题
    title: {
      default: '',
      type: String
    },
    // 文章作者
    aut_name: {
      default: '',
      type: String
    },
    // 评论数量
    cmtCount: {
      default: 0,
      // 通过数组形式，为当前属性定义多个可能的类型
      type: [Number, String]
    },
    // 发布日期
    pubdate: {
      default: '',
      type: String
    },
    // 封面的信息对象
    cover: {
      type: Object,
      default: function () {
        // return的就是这个cover对象的默认值
        return {
          type: 0
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.label-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.thumb {
  // 矩形黄金比例：0.618
  width: 113px;
  height: 70px;
  background-color: #f8f8f8;
  object-fit: cover;
}

.title-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.thumb-box {
  display: flex;
  justify-content: space-between;
}
</style>
