import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// ECharts 相关导入
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart, LineChart, CandlestickChart } from 'echarts/charts'
// 在 main.ts 中添加
import '@fortawesome/fontawesome-free/css/all.css'
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  DataZoomComponent,
  VisualMapComponent
} from 'echarts/components'

// 注册 ECharts 组件和渲染器
use([
  CanvasRenderer,
  BarChart,
  LineChart,
  CandlestickChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  DataZoomComponent,
  VisualMapComponent
])

import App from './App.vue'
import router from './router'

const app = createApp(App)
// 全局注册图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 配置Element Plus主题色
app.use(ElementPlus, { size: 'default' })

app.use(createPinia())
app.use(router)

app.mount('#app')
