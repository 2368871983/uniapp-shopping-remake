import type { PageParams, PageResult } from '@/types/global'
import type { BannerItem, CategoryItem, GuessItem, HotItem } from '@/types/home.d'
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

/**
 * 猜你喜欢-小程序
 */
export const getHomeGoodsGuessLikeAPI = (data: PageParams) => {
  return request<PageResult<GuessItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data,
  })
}
