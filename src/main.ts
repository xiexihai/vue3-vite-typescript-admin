import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './public-path'

import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let instance: any = null
let router = null

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function render(props: any = {}) {
  const { container, userInfo } = props
  router = createRouter({
    history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? '/shop/' : '/'),
    routes,
  })

  instance = createApp(App).use(Antd).use(router)
  instance.config.globalProperties.userInfo = userInfo
  instance.mount(container ? container : '#app')
}

// 独立运行时
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render()
}

renderWithQiankun({
  bootstrap() {
    // do nothing.
  },
  mount(props) {
    render(props)
  },
  unmount() {
    instance.unmount()
    instance._container.innerHTML = ''
    instance = null
    router = null
  },
  update() {
    // do nothing
  },
})
