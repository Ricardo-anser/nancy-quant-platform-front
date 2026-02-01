<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterView, useRouter, useRoute } from 'vue-router'
import { Menu as IconMenu, HomeFilled, InfoFilled } from '@element-plus/icons-vue'

// 当前激活的菜单项
const activeIndex = ref('1')

// 路由实例
const router = useRouter()
const route = useRoute()

// 菜单项列表
const menuItems = [
  {
    index: '1',
    title: '首页',
    icon: HomeFilled,
    path: '/'
  },
  {
    index: '2',
    title: '关于',
    icon: InfoFilled,
    path: '/about'
  }
]

// 路由变化时更新激活菜单项
watch(route, () => {
  const item = menuItems.find(item => item.path === route.path)
  if (item) {
    activeIndex.value = item.index
  }
}, { immediate: true })




</script>

<template>
  <div>
    <transition name="fade-transform" mode="out-in">
      <RouterView :key="route.fullPath" />
    </transition>
  </div>
</template>

<style></style>