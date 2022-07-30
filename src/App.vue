<template>
  <a-layout class="layout-wrapper">
    <Header />
    <a-layout>
      <Sidebar />
      <Main />
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import Header from '@layout/Header.vue'
import Sidebar from '@layout/Sidebar.vue'
import Main from '@layout/Main.vue'
</script>
<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  .layout-wrapper {
    min-height: 100vh !important;
  }
}
</style>
