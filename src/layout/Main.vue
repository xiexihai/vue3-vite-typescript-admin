<template>
  <a-layout-content class="content">
    <router-view />
  </a-layout-content>
</template>
<style lang="scss" scoped>
.content {
  max-height: calc(100vh - 48px);
  overflow-y: auto;
}
</style>
