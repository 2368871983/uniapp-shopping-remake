// src/types/components.d.ts
import XtxSwiper from './XtxSwiper.vue'
declare module 'vue' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper
  }
}

import XtxGuess from './XtxGuess.vue'
declare module 'vue' {
  export interface GlobalComponents {
    XtxGuess: typeof XtxGuess
  }
}

export type XtxGuessInstance = InstanceType<typeof XtxGuess>
