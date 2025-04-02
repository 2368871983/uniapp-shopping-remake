<script setup lang="ts">
import '@/utils/http'
import { onMounted } from 'vue'
onMounted(() => {
  const getdata = () => {
    uni.request({
      url: '/home/banner',
      method: 'GET',
    })
  }
  getdata()
})
</script>

<template>
  <uni-card
    title="基础卡片"
    sub-title="副标题"
    extra="额外信息"
    thumbnail="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
    ><text>这是一个带头像和双标题的基础卡片，此示例展示了一个完整的卡片。</text>
  </uni-card>
  <button>2131</button>
</template>

<style lang="scss"></style>
