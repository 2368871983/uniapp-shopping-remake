<script setup lang="ts">
import CustomNavbar from '@/pages/index/components/CustomNavbar.vue'
import { getHomeBannerAPI, getHomeCategoryAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import '@/utils/request'
import type { BannerItem, CategoryItem } from '@/types/home'
import CategoryPanel from './components/CategoryPanel.vue'

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
  console.log(res)
  CategoryList.value = res.result
}

// 页面加载
onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
})
</script>

<template>
  <CustomNavbar></CustomNavbar>
  <XtxSwiper :bannerList="BannerList"></XtxSwiper>
  <CategoryPanel :categoryList="CategoryList"></CategoryPanel>
</template>

<style lang="scss"></style>
