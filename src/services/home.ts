import type { BannerItem, CategoryItem, HotItem } from '@/types/home.d'
import { request } from '@/utils/request'

// 获取首页轮播图
export const getHomeBannerAPI = () => {
  return request<BannerItem[]>({
    url: '/home/banner',
    method: 'GET',
    data: {
      distributionSite: 1,
    },
  })
}

// 获取首页分类
export const getHomeCategoryAPI = () => {
  return request<CategoryItem[]>({
    url: '/home/category/mutli',
    method: 'GET',
  })
}

// services/home.ts
/**
 * 首页-热门推荐-小程序
 */
export const getHomeHotAPI = () => {
  return request<HotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}
