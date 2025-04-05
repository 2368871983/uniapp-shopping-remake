<script setup lang="ts">
import CustomNavbar from '@/pages/index/components/CustomNavbar.vue'
import {
  getHomeBannerAPI,
  getHomeCategoryAPI,
  getHomeGoodsGuessLikeAPI,
  getHomeHotAPI,
} from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import '@/utils/request'
import type { BannerItem, CategoryItem, GuessItem, HotItem } from '@/types/home'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import XtxGuess from '@/components/XtxGuess.vue'
import type { XtxGuessInstance } from '@/types/component'

// 获取首页轮播图数据
const BannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  BannerList.value = res.result
}

// 获取首页分类数据
const CategoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  CategoryList.value = res.result
}

// 获取首页热门推荐数据
const HotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  HotList.value = res.result
}
// 获取猜你喜欢组件实例
const guessRef = ref<XtxGuessInstance>()

// 滚动触底
const onScrolltolower = () => {
  const res = guessRef.value.getMore()
}
// 页面加载
onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
  getHomeHotData()
})
</script>

<template>
  <CustomNavbar></CustomNavbar>
  <scroll-view @scrolltolower="onScrolltolower" class="scroll-view" scroll-y>
    <XtxSwiper :bannerList="BannerList"></XtxSwiper>
    <CategoryPanel :categoryList="CategoryList"></CategoryPanel>
    <HotPanel :hotlist="HotList"></HotPanel>
    <XtxGuess ref="guessRef"></XtxGuess>
  </scroll-view>
</template>

<style lang="scss">
page {
  display: flex;
  height: 100%;
  flex-direction: column;
  background-color: #f7f7f7;
}
.scroll-view {
  flex: 1;
}
</style>
