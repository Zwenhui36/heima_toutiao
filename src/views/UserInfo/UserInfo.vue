<template>
  <div>
    <van-nav-bar
      title="个人资料"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 用户名 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="zj"
        :rules="[{ required: true, message: '请确认用户名' }]"
      />
      <!-- 密码 -->
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="****"
        :rules="[{ required: true, message: '请确认密码' }]"
      />
      <!-- 性别 -->
      <van-field
        name="radio"
        label="性别"
        :rules="[{ required: true, message: '请确认你的性别' }]"
      >
        <template #input>
          <van-radio-group v-model="radio" direction="horizontal">
            <van-radio name="1">男</van-radio>
            <van-radio name="2">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <!-- 头像上传 -->
      <van-field name="uploader" label="头像上传">
        <template #input>
          <van-uploader v-model="uploader" />
        </template>
      </van-field>
      <!-- 居住城市 -->
      <van-field
        readonly
        clickable
        name="picker"
        :value="value"
        label="居住地址"
        placeholder="点击选择城市"
        @click="showPicker = true"
        :rules="[{ required: true, message: '确认居住地址' }]"
      />
      <van-popup v-model="showPicker" position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @confirm="onConfirm"
          @cancel="showPicker = false"
        />
      </van-popup>
      <!-- 提交 -->
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  data() {
    return {
      // 用户名
      username: '',
      // 密码
      password: '',
      // 性别
      radio: '1',
      // 头像
      uploader: [{ url: 'https://img01.yzcdn.cn/vant/leaf.jpg' }],
      // 城市
      value: '',
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      showPicker: false
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    // 城市选择
    onConfirm(value) {
      this.value = value
      this.showPicker = false
    },
    // 提交按钮
    onSubmit(values) {
      console.log('submit', values)
    }
  }
}
</script>

<style lang="less" scoped></style>
