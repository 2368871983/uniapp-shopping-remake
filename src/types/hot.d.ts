import type { GoodsItem, PageResult } from '@/types/goods'
export type HotResult = {
  bannerPicture: string
  id: string
  subTypes: subTypesItem[]
  title: string
}

export type subTypesItem = {
  goodsItems: PageResult<GoodsItem>
  id: string
  title: string
}
