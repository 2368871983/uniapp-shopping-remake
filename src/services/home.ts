import type { BannerItem } from '@/types/home.d'
import { request } from '@/utils/request'

export const getHomeBannerAPI = () => {
  return request<BannerItem[]>({
    url: '/home/banner',
    method: 'GET',
    data: {
      distributionSite: 1,
    },
  })
}
