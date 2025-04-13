<template name="skeleton">
  <view class="sk-container">
    <view is="pages/index/components/PageSkeleton">
      <view class="sk-container PageSkeleton--sk-container">
        <scroll-view
          class="scroll-view PageSkeleton--scroll-view scroll-view PageSkeleton--scroll-view"
          :refresher-enabled="true"
          :scroll-y="true"
        >
          <view>
            <view
              class="carousel PageSkeleton--carousel XtxSwiper--carousel PageSkeleton--XtxSwiper--carousel"
            >
              <swiper :circular="true" :current="0" :interval="3000" :autoplay="false">
                <swiper-item
                  style="
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    transform: translate(0%, 0px) translateZ(0px);
                  "
                >
                  <navigator
                    class="navigator PageSkeleton--navigator XtxSwiper--navigator PageSkeleton--XtxSwiper--navigator"
                    hover-class="none"
                  >
                    <image
                      class="image PageSkeleton--image XtxSwiper--image PageSkeleton--XtxSwiper--image sk-image PageSkeleton--sk-image"
                      mode="aspectFill"
                    ></image>
                  </navigator>
                </swiper-item>
              </swiper>
              <view
                class="indicator PageSkeleton--indicator XtxSwiper--indicator PageSkeleton--XtxSwiper--indicator"
              >
                <text
                  class="dot PageSkeleton--dot XtxSwiper--dot PageSkeleton--XtxSwiper--dot active PageSkeleton--active XtxSwiper--active PageSkeleton--XtxSwiper--active"
                ></text>
                <text
                  class="dot PageSkeleton--dot XtxSwiper--dot PageSkeleton--XtxSwiper--dot"
                ></text>
                <text
                  class="dot PageSkeleton--dot XtxSwiper--dot PageSkeleton--XtxSwiper--dot"
                ></text>
                <text
                  class="dot PageSkeleton--dot XtxSwiper--dot PageSkeleton--XtxSwiper--dot"
                ></text>
                <text
                  class="dot PageSkeleton--dot XtxSwiper--dot PageSkeleton--XtxSwiper--dot"
                ></text>
              </view>
            </view>
          </view>
          <view>
            <view
              class="category PageSkeleton--category CategoryPanel--category PageSkeleton--CategoryPanel--category"
            >
              <navigator
                class="category-item PageSkeleton--category-item CategoryPanel--category-item PageSkeleton--CategoryPanel--category-item"
                hover-class="none"
              >
                <image
                  class="icon PageSkeleton--icon CategoryPanel--icon PageSkeleton--CategoryPanel--icon sk-image PageSkeleton--sk-image"
                ></image>
                <text
                  class="text PageSkeleton--text CategoryPanel--text PageSkeleton--CategoryPanel--text sk-transparent PageSkeleton--sk-transparent sk-text-14-2857-743 PageSkeleton--sk-text-14-2857-743 sk-text PageSkeleton--sk-text sk-text-14-2857-110"
                  >居家</text
                >
              </navigator>
              <navigator
                class="category-item PageSkeleton--category-item CategoryPanel--category-item PageSkeleton--CategoryPanel--category-item"
                hover-class="none"
              >
                <image
                  class="icon PageSkeleton--icon CategoryPanel--icon PageSkeleton--CategoryPanel--icon sk-image PageSkeleton--sk-image"
                ></image>
                <text
                  class="text PageSkeleton--text CategoryPanel--text PageSkeleton--CategoryPanel--text sk-transparent PageSkeleton--sk-transparent sk-text-14-2857-523 PageSkeleton--sk-text-14-2857-523 sk-text PageSkeleton--sk-text sk-text-14-2857-692"
                  >锦鲤</text
                >
              </navigator>
              <navigator
                class="category-item PageSkeleton--category-item CategoryPanel--category-item PageSkeleton--CategoryPanel--category-item"
                hover-class="none"
              >
                <image
                  class="icon PageSkeleton--icon CategoryPanel--icon PageSkeleton--CategoryPanel--icon sk-image PageSkeleton--sk-image"
                ></image>
                <text
                  class="text PageSkeleton--text CategoryPanel--text PageSkeleton--CategoryPanel--text sk-transparent PageSkeleton--sk-transparent sk-text-14-2857-854 PageSkeleton--sk-text-14-2857-854 sk-text PageSkeleton--sk-text sk-text-14-2857-87"
                  >服饰</text
                >
              </navigator>
              <navigator
                class="category-item PageSkeleton--category-item CategoryPanel--category-item PageSkeleton--CategoryPanel--category-item"
                hover-class="none"
              >
                <image
                  class="icon PageSkeleton--icon CategoryPanel--icon PageSkeleton--CategoryPanel--icon sk-image PageSkeleton--sk-image"
                ></image>
                <text
                  class="text PageSkeleton--text CategoryPanel--text PageSkeleton--CategoryPanel--text sk-transparent PageSkeleton--sk-transparent sk-text-14-2857-620 PageSkeleton--sk-text-14-2857-620 sk-text PageSkeleton--sk-text sk-text-14-2857-382"
                  >母婴</text
                >
              </navigator>
              <navigator
                class="category-item PageSkeleton--category-item CategoryPanel--category-item PageSkeleton--CategoryPanel--category-item"
                hover-class="none"
              >
                <image
                  class="icon PageSkeleton--icon CategoryPanel--icon PageSkeleton--CategoryPanel--icon sk-image PageSkeleton--sk-image"
                ></image>
                <text
                  class="text PageSkeleton--text CategoryPanel--text PageSkeleton--CategoryPanel--text sk-transparent PageSkeleton--sk-transparent sk-text-14-2857-133 PageSkeleton--sk-text-14-2857-133 sk-text PageSkeleton--sk-text sk-text-14-2857-813"
                  >个护</text
                >
              </navigator>
              <navigator
                class="category-item PageSkeleton--category-item CategoryPanel--category-item PageSkeleton--CategoryPanel--category-item"
                hover-class="none"
              >
                <image
                  class="icon PageSkeleton--icon CategoryPanel--icon PageSkeleton--CategoryPanel--icon sk-image PageSkeleton--sk-image"
                ></image>
                <text
                  class="text PageSkeleton--text CategoryPanel--text PageSkeleton--CategoryPanel--text sk-transparent PageSkeleton--sk-transparent sk-text-14-2857-624 PageSkeleton--sk-text-14-2857-624 sk-text PageSkeleton--sk-text sk-text-14-2857-456"
                  >严选</text
                >
              </navigator>
              <navigator
                class="category-item PageSkeleton--category-item CategoryPanel--category-item PageSkeleton--CategoryPanel--category-item"
                hover-class="none"
              >
                <image
                  class="icon PageSkeleton--icon CategoryPanel--icon PageSkeleton--CategoryPanel--icon sk-image PageSkeleton--sk-image"
                ></image>
                <text
                  class="text PageSkeleton--text CategoryPanel--text PageSkeleton--CategoryPanel--text sk-transparent PageSkeleton--sk-transparent sk-text-14-2857-633 PageSkeleton--sk-text-14-2857-633 sk-text PageSkeleton--sk-text sk-text-14-2857-315"
                  >数码</text
                >
              </navigator>
              <navigator
                class="category-item PageSkeleton--category-item CategoryPanel--category-item PageSkeleton--CategoryPanel--category-item"
                hover-class="none"
              >
                <image
                  class="icon PageSkeleton--icon CategoryPanel--icon PageSkeleton--CategoryPanel--icon sk-image PageSkeleton--sk-image"
                ></image>
                <text
                  class="text PageSkeleton--text CategoryPanel--text PageSkeleton--CategoryPanel--text sk-transparent PageSkeleton--sk-transparent sk-text-14-2857-972 PageSkeleton--sk-text-14-2857-972 sk-text PageSkeleton--sk-text sk-text-14-2857-107"
                  >运动</text
                >
              </navigator>
              <navigator
                class="category-item PageSkeleton--category-item CategoryPanel--category-item PageSkeleton--CategoryPanel--category-item"
                hover-class="none"
              >
                <image
                  class="icon PageSkeleton--icon CategoryPanel--icon PageSkeleton--CategoryPanel--icon sk-image PageSkeleton--sk-image"
                ></image>
                <text
                  class="text PageSkeleton--text CategoryPanel--text PageSkeleton--CategoryPanel--text sk-transparent PageSkeleton--sk-transparent sk-text-14-2857-534 PageSkeleton--sk-text-14-2857-534 sk-text PageSkeleton--sk-text sk-text-14-2857-997"
                  >杂项</text
                >
              </navigator>
              <navigator
                class="category-item PageSkeleton--category-item CategoryPanel--category-item PageSkeleton--CategoryPanel--category-item"
                hover-class="none"
              >
                <image
                  class="icon PageSkeleton--icon CategoryPanel--icon PageSkeleton--CategoryPanel--icon sk-image PageSkeleton--sk-image"
                ></image>
                <text
                  class="text PageSkeleton--text CategoryPanel--text PageSkeleton--CategoryPanel--text sk-transparent PageSkeleton--sk-transparent sk-text-14-2857-208 PageSkeleton--sk-text-14-2857-208 sk-text PageSkeleton--sk-text sk-text-14-2857-69"
                  >品牌</text
                >
              </navigator>
            </view>
          </view>
          <view>
            <view
              class="panel PageSkeleton--panel HotPanel--panel PageSkeleton--HotPanel--panel hot PageSkeleton--hot HotPanel--hot PageSkeleton--HotPanel--hot"
            >
              <view class="item PageSkeleton--item HotPanel--item PageSkeleton--HotPanel--item">
                <view
                  class="title PageSkeleton--title HotPanel--title PageSkeleton--HotPanel--title"
                >
                  <text
                    class="title-text PageSkeleton--title-text HotPanel--title-text PageSkeleton--HotPanel--title-text sk-transparent PageSkeleton--sk-transparent sk-text-14-2857-974 PageSkeleton--sk-text-14-2857-974 sk-text PageSkeleton--sk-text sk-text-14-2857-837"
                    >特惠推荐</text
                  >
                  <text
                    class="title-desc PageSkeleton--title-desc HotPanel--title-desc PageSkeleton--HotPanel--title-desc sk-transparent PageSkeleton--sk-transparent sk-text-14-2857-988 PageSkeleton--sk-text-14-2857-988 sk-text PageSkeleton--sk-text sk-text-14-2857-738"
                    >精选全攻略</text
                  >
                </view>
                <navigator
                  class="cards PageSkeleton--cards HotPanel--cards PageSkeleton--HotPanel--cards"
                  hover-class="none"
                >
                  <image
                    class="image PageSkeleton--image HotPanel--image PageSkeleton--HotPanel--image sk-image PageSkeleton--sk-image"
                    mode="aspectFit"
                  ></image>
                  <image
                    class="image PageSkeleton--image HotPanel--image PageSkeleton--HotPanel--image sk-image PageSkeleton--sk-image"
                    mode="aspectFit"
                  ></image>
                </navigator>
              </view>
              <view class="item PageSkeleton--item HotPanel--item PageSkeleton--HotPanel--item">
                <view
                  class="title PageSkeleton--title HotPanel--title PageSkeleton--HotPanel--title"
                >
                  <text
                    class="title-text PageSkeleton--title-text HotPanel--title-text PageSkeleton--HotPanel--title-text sk-transparent PageSkeleton--sk-transparent sk-text-14-2857-702 PageSkeleton--sk-text-14-2857-702 sk-text PageSkeleton--sk-text sk-text-14-2857-28"
                    >爆款推荐</text
                  >
                  <text
                    class="title-desc PageSkeleton--title-desc HotPanel--title-desc PageSkeleton--HotPanel--title-desc sk-transparent PageSkeleton--sk-transparent sk-text-14-2857-558 PageSkeleton--sk-text-14-2857-558 sk-text PageSkeleton--sk-text sk-text-14-2857-877"
                    >最受欢迎</text
                  >
                </view>
                <navigator
                  class="cards PageSkeleton--cards HotPanel--cards PageSkeleton--HotPanel--cards"
                  hover-class="none"
                >
                  <image
                    class="image PageSkeleton--image HotPanel--image PageSkeleton--HotPanel--image sk-image PageSkeleton--sk-image"
                    mode="aspectFit"
                  ></image>
                  <image
                    class="image PageSkeleton--image HotPanel--image PageSkeleton--HotPanel--image sk-image PageSkeleton--sk-image"
                    mode="aspectFit"
                  ></image>
                </navigator>
              </view>
              <view class="item PageSkeleton--item HotPanel--item PageSkeleton--HotPanel--item">
                <view
                  class="title PageSkeleton--title HotPanel--title PageSkeleton--HotPanel--title"
                >
                  <text
                    class="title-text PageSkeleton--title-text HotPanel--title-text PageSkeleton--HotPanel--title-text sk-transparent PageSkeleton--sk-transparent sk-text-14-2857-200 PageSkeleton--sk-text-14-2857-200 sk-text PageSkeleton--sk-text sk-text-14-2857-380"
                    >一站买全</text
                  >
                  <text
                    class="title-desc PageSkeleton--title-desc HotPanel--title-desc PageSkeleton--HotPanel--title-desc sk-transparent PageSkeleton--sk-transparent sk-text-14-2857-315 PageSkeleton--sk-text-14-2857-315 sk-text PageSkeleton--sk-text sk-text-14-2857-123"
                    >精心优选</text
                  >
                </view>
                <navigator
                  class="cards PageSkeleton--cards HotPanel--cards PageSkeleton--HotPanel--cards"
                  hover-class="none"
                >
                  <image
                    class="image PageSkeleton--image HotPanel--image PageSkeleton--HotPanel--image sk-image PageSkeleton--sk-image"
                    mode="aspectFit"
                  ></image>
                  <image
                    class="image PageSkeleton--image HotPanel--image PageSkeleton--HotPanel--image sk-image PageSkeleton--sk-image"
                    mode="aspectFit"
                  ></image>
                </navigator>
              </view>
              <view class="item PageSkeleton--item HotPanel--item PageSkeleton--HotPanel--item">
                <view
                  class="title PageSkeleton--title HotPanel--title PageSkeleton--HotPanel--title"
                >
                  <text
                    class="title-text PageSkeleton--title-text HotPanel--title-text PageSkeleton--HotPanel--title-text sk-transparent PageSkeleton--sk-transparent sk-text-14-2857-22 PageSkeleton--sk-text-14-2857-22 sk-text PageSkeleton--sk-text sk-text-14-2857-299"
                    >新鲜好物</text
                  >
                  <text
                    class="title-desc PageSkeleton--title-desc HotPanel--title-desc PageSkeleton--HotPanel--title-desc sk-transparent PageSkeleton--sk-transparent sk-text-14-2857-976 PageSkeleton--sk-text-14-2857-976 sk-text PageSkeleton--sk-text sk-text-14-2857-883"
                    >生活加分项</text
                  >
                </view>
                <navigator
                  class="cards PageSkeleton--cards HotPanel--cards PageSkeleton--HotPanel--cards"
                  hover-class="none"
                >
                  <image
                    class="image PageSkeleton--image HotPanel--image PageSkeleton--HotPanel--image sk-image PageSkeleton--sk-image"
                    mode="aspectFit"
                  ></image>
                  <image
                    class="image PageSkeleton--image HotPanel--image PageSkeleton--HotPanel--image sk-image PageSkeleton--sk-image"
                    mode="aspectFit"
                  ></image>
                </navigator>
              </view>
            </view>
          </view>
          <view class="r PageSkeleton--r r PageSkeleton--r">
            <view
              class="caption PageSkeleton--caption XtxGuess--caption PageSkeleton--XtxGuess--caption"
            >
              <text
                class="text PageSkeleton--text XtxGuess--text PageSkeleton--XtxGuess--text sk-transparent PageSkeleton--sk-transparent sk-text-0-0000-574 PageSkeleton--sk-text-0-0000-574 sk-text PageSkeleton--sk-text sk-pseudo PageSkeleton--sk-pseudo sk-pseudo-circle PageSkeleton--sk-pseudo-circle sk-text-0-0000-775"
                >猜你喜欢</text
              >
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<style>
.sk-transparent {
  color: transparent !important;
}
.sk-text-3-5714-659 {
  background-image: linear-gradient(
    transparent 3.5714%,
    #eeeeee 0%,
    #eeeeee 96.4286%,
    transparent 0%
  ) !important;
  background-size: 100% 28rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-176 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.2rpx;
  position: relative !important;
}
.sk-text-14-2857-110 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-692 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-87 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-382 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-813 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-456 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-315 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-107 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-997 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-69 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-837 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-738 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-28 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-877 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-380 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-123 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-299 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-883 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-0-0000-775 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 32rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
