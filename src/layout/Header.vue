<template>
  <a-layout-header class="header">
    <div class="header__logo" @click="handleToHome">Vue3+Vite+Typescript</div>
    <div class="header__right">
      <a-dropdown>
        <span class="header__user-info">
          <a-avatar style="background-color: #87d068">
            <template #icon><UserOutlined /></template>
          </a-avatar>
          {{ userInfo?.name }}
        </span>
        <template #overlay>
          <a-menu>
            <a-menu-item @click="handleLogout"> 退出登录 </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </a-layout-header>
</template>
<script lang="ts" setup>
import { getCurrentInstance } from 'vue'
const userInfo = getCurrentInstance()?.appContext?.config?.globalProperties?.userInfo
import { UserOutlined } from '@ant-design/icons-vue'
const handleLogout = () => {
  userInfo.logout()
}
const handleToHome = () => {
  location.href = '/'
}
</script>

<style lang="scss" scoped>
.header {
  padding: 0;
  height: 48px;
  line-height: 48px;
  display: flex;
  background: #001529;
  &__logo {
    color: #fff;
    font-size: 18px;
    margin-left: 20px;
    cursor: pointer;
  }
  &__right {
    flex: 1;
    text-align: right;
  }
  &__user-info {
    color: #fff;
    display: inline-block;
    padding: 0 20px;
    cursor: pointer;
  }
}
</style>
