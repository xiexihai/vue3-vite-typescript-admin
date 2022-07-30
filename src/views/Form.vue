<template>
  <div style="margin: 20px; padding: 20px; background: #fff">
    <a-form
      :model="formState"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 12 }"
      @finish="onFinish"
    >
      <a-form-item
        label="用户名"
        name="username"
        :rules="[{ required: true, message: '请输入用户名' }]"
      >
        <a-input v-model:value="formState.username" placeholder="请输入用户名" />
      </a-form-item>

      <a-form-item
        label="密码"
        name="password"
        :rules="[{ required: true, message: '请输入密码' }]"
      >
        <a-input-password v-model:value="formState.password" placeholder="请输入密码" />
      </a-form-item>

      <a-form-item
        label="手机号码"
        name="tel"
        :rules="[{ required: true, message: '请输入手机号码' }]"
      >
        <a-input v-model:value="formState.tel" placeholder="请输入手机号码" />
      </a-form-item>

      <a-form-item label="性别" name="sex">
        <a-select v-model:value="formState.sex" placeholder="请选择性别">
          <a-select-option value="shanghai">男</a-select-option>
          <a-select-option value="beijing">女</a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item label="搜获地址" name="address">
        <a-textarea v-model:value="formState.address" placeholder="请输入搜获地址" />
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit">保存</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
interface FormState {
  username: string
  password: string
  sex: string | undefined
  tel: string
  address: string
}
const formState = reactive<FormState>({
  username: '',
  password: '',
  sex: undefined,
  tel: '',
  address: '',
})
</script>
