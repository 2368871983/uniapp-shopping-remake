import type { BannerItem, CategoryItem } from '@/types/home.d'
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
