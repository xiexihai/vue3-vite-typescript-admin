import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
const packageName = require('./package.json').name;
import qiankun from 'vite-plugin-qiankun';
export default defineConfig({
  plugins: [vue(),qiankun(packageName, {
    useDevMode: true
})],
  resolve: {
    // 配置别名
    alias: [
      { find: '@', replacement: resolve(__dirname, './src') },
      { find: '@views', replacement: resolve(__dirname, './src/views') },
      { find: '@layout', replacement: resolve(__dirname, './src/layout') },
    ],
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
  // output: {
  //   library: `${packageName}-[name]`,
  //   libraryTarget: 'umd',
  //   jsonpFunction: `webpackJsonp_${packageName}`,
  // },
})
