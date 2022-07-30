<template>
  <a-layout-sider class="slide">
    <a-menu mode="inline" :selectedKeys="selectedKeys">
      <a-menu-item key="home">
        <router-link to="/home"><dashboard-outlined /><span>控制台</span></router-link>
      </a-menu-item>
      <a-menu-item key="form">
        <router-link to="/form"><form-outlined /><span>表单页</span></router-link>
      </a-menu-item>
      <a-menu-item key="list">
        <router-link to="/list"><profile-outlined /><span>列表页</span></router-link>
      </a-menu-item>
      <a-menu-item key="about">
        <router-link to="/about"><idcard-outlined /><span>关于</span></router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>
<script setup lang="ts">
import { watch, ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  DashboardOutlined,
  FormOutlined,
  ProfileOutlined,
  IdcardOutlined,
} from '@ant-design/icons-vue'
const router = useRouter()
const selectedKeys = ref<string[]>()
watch(
  () => router.currentRoute.value.path,
  (newRouter) => {
    selectedKeys.value = newRouter.split('/').map((item) => item)
  }
)
</script>
<style lang="scss" scoped>
.slide {
  background: #fff;
  box-shadow: 2px 0 8px 0 rgb(29 35 41 / 5%);
}
</style>
