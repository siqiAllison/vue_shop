<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginFromRules" label-width="0px" class="login_form">
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            prefix-icon="iconfont icon-user"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="iconfont icon-3702mima"
            type="password"
          ></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="buts">
          <el-button type="primary" @click="submitLoginForm">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    // 登录表单的数据绑定对象
    return {
      loginForm: {
        username: '',
        password: ''
      },
      // 验证对象
      loginFromRules: {
        // 验证用户名
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        // 验证密码
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '最少输入6个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 重置按钮
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields()
      console.log(this)
    },
    submitLoginForm() {
      this.$refs.loginFormRef.validate(async valid => {
        console.log(valid)

        if (!valid) {
          return valid
        }
        const { data: res } = await this.$http.post('login', this.loginForm)
        if (res.meta.status !== 200) {
          return this.$message.error('登录失败')
        }
        console.log(res)
        this.$message.success('登录成功')

        // 1.将登录成功之后的token 保存到客户端sessionStorage中
        // token只应在网址登录打开期间有效，所有token保存在sessionStorage中
        window.sessionStorage.setItem('token', res.data.token)

        // 通过编程试导航跳转到后台主页，路由地址市 /home
        this.$router.push('/home')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.avatar_box {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 5%;
  box-sizing: border-box;
}
.buts {
  display: flex;
  justify-content: flex-end;
}
</style>
