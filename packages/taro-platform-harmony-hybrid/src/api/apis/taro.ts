import Taro from '@tarojs/api'
import TaroH5, { getAppInfo } from '@tarojs/taro-h5/dist/api/taro'

import {
  getApp,
  getCurrentInstance,
  getCurrentPages,
  initLaunchOptions,
  loadNavigationStyle,
  navigateBack,
  navigateTo,
  nextTick,
  redirectTo,
  registerNavigationStyleHandler,
  reLaunch,
  switchTab,
} from './index'
import native from './NativeApi'

const requirePlugin = () => {
  return {
    world: '',
    hello: function () {

    }
  }
}

// 监听原生的Navigate方法
native.onNativeNavigate({
  nativeNavigateTo: (url: string) => {
    navigateTo({
      url: url,
      success: function () {}
    })
  },
  nativeNavigateBack: (delta: number) => {
    navigateBack({
      delta: delta
    })
  }
})

loadNavigationStyle()
registerNavigationStyleHandler()

// 同步小程序启动时的参数
Taro.eventCenter.once('__taroRouterLaunch', initLaunchOptions)

const {
  Behavior,
  getEnv,
  ENV_TYPE,
  Link,
  interceptors,
  interceptorify,
  Current,
  options,
  eventCenter,
  Events,
  preload,
  history,
  pxTransform,
  initPxTransform,
  canIUseWebp
} = TaroH5 as any

const taro: typeof Taro = {
  // @ts-ignore
  Behavior,
  getEnv,
  ENV_TYPE,
  Link,
  interceptors,
  interceptorify,
  Current,
  getCurrentInstance,
  options,
  nextTick,
  eventCenter,
  Events,
  preload,
  history,
  navigateBack,
  navigateTo,
  reLaunch,
  redirectTo,
  getCurrentPages,
  switchTab,
  requirePlugin,
  getApp
}

export default taro

export {
  Behavior,
  canIUseWebp,
  Current,
  ENV_TYPE,
  eventCenter,
  Events,
  getAppInfo,
  getEnv,
  history,
  initPxTransform,
  interceptorify,
  interceptors,
  Link,
  options,
  preload,
  pxTransform,
  requirePlugin
}
