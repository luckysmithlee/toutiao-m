<template>
  <div class="login-container">
    <van-nav-bar
      class="app-nav-bar"
      title="注册/登录"

      left-arrow
      @click-left="$router.back()"
    />
    <!-- 登陆表单 -->
    <van-cell-group>
      <van-field
        v-model="user.moble"
        icon-prefix="toutiao"
        left-icon="shouji"
        placeholder="请输入手机号"
      />
      <van-field
        v-model="user.code"
        clearable
        icon-prefix="toutiao"
        left-icon="yanzhengma"
        placeholder="请输入验证码"
      >
        <template #button>
          <van-button
          size="mini"
          round
          class="send-btn"
          >发送验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>
    <div class = "login-btn-wrap">
    <van-button class="login-btn" type="info" block>登录</van-button>
    </div>
    <!-- /登陆表单 -->
  </div>
</template>

<script>
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '', // 手机号
        code: '' // 验证码
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {

  },
  methods: {

  }

}
</script>

<style lang="less" scoped>
.login-container{
  .login-btn-wrap{
    padding: 26px 16px;
    .login-btn{
      background-color: #6db4fb;
      border: none;
      .van-button__text{
        font-size: 15px;
      }
    }
  }
  .send-btn{
    width: 76px;
    height: 23px;
    background-color: #ededed;
    .van-button__text{
      font-size: 11px;
      color: #666666;
    }
  }
}
</style>
