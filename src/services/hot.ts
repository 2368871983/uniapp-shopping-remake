import { request } from '@/utils/request'
import type { PageParams } from '@/types/global'
import type { HotResult } from '@/types/hot'
export const getHotRecommendAPI = (url: string, data?: PageParams & { subType?: string }) => {
  return request<HotResult>({
    method: 'GET',
    url,
    data,
  })
}
