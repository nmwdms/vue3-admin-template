<template>
    <div class="login_container">
      <el-row>
        <el-col :span="12" :offset="0"></el-col>
        <el-col :span="12" :offset="0">
          <el-form class="login_form" :rules="rules" :model="loginForm">
            <h1>Hello</h1>
            <h2>欢迎</h2>
            <el-form-item prop="username">
              <el-input :prefix-icon="User" placeholder="admin" v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input :prefix-icon="Lock" stype="password" placeholder="password" v-model="loginForm.password" show-password></el-input>
            </el-form-item>
            <el-form-item>
              <el-button :loading="loading" type="primary" class="login_btn" @click="login">登录</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      
    </div>
</template>

<script setup lang="ts">
  import { User,Lock } from '@element-plus/icons-vue';
  import { reactive, ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { ElNotification } from 'element-plus';
  import useUserStore from '@/store/modules/user';
  import { getTime } from '@/utils/time';

  let loginForm = reactive({username:'admin', password:'111111'})
  let useStore = useUserStore()
  let router = useRouter()
  let loading = ref(false)


  const validatorUserName = (rule:any,value:any,callback:any) => {
    if(/^\d{5,10}$/.test(value)){
      callback();
    }
    else{
      callback(new Error('账号长度错误'))
    }
  }

  const validatorPassword = (rule:any,value:any,callback:any) => {
    if(/^\d{5,10}$/.test(value)){
      callback();
    }
    else{
      callback(new Error('密码长度错误'))
    }
  }

  const rules = {
    username: [
      {trigger:'change',validator:validatorUserName}
    ],
    password: [
    {trigger:'change',validator:validatorPassword}
    ]
  }



  const login = async ()=>{
    loading.value = true
    try{
      await useStore.userLogin(loginForm);
      router.push('/');
      ElNotification({
        type:'success',
        title:`Hi, ${getTime()}好`,
        message:'登录成功'
      })
      loading.value = false
    }
    catch(error) {
      loading.value = false
      ElNotification.error((error as Error).message)
    }
    
  }
</script>
  
<style scoped lang="scss">
  .login_container{
    width: 100%;
    height: 100vh;
    background: url('@/assets/images/background.jpg') no-repeat;
    background-size: cover;
    .login_form{
      position: relative;
      width: 80%;
      top: 30vh;
      padding: 40px;
      background: url('@/assets/images/login_form.jpg') no-repeat;
      background-size: cover;
      h1{
        font-size: 40px;
        color: white;
      }
      h2{
        font-size: 20px;
        margin: 20px 0;
        color: white;
      }
      .login_btn{
        width: 100%;
      }
    }
  }
  
</style>