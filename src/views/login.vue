<template>
  <div>
    <el-form :model="form" label-width="120px">
      <el-form-item label="用户名">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" />
      </el-form-item>
      <el-form-item>
        <el-button @click="submitForm">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { loginApi } from '../api/index'
import { useRouter } from 'vue-router';
import {setToken} from '../utils/auth'
const form = reactive({
  name: '',
  password: ''
})

const router = useRouter()
const submitForm = async () => {
  const res = await loginApi()
  if (res && res.status === 200) {
    setToken(res.data.token)
    router.push('/home')
  }
}

</script>