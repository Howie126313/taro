import { h } from 'vue'

export default function (componentName: string, options?: Record<string, any>, children?: any) {
  const { attrs = {}, on = {}, props = {}, slots = {}, ...el } = options
  // Events
  Object.keys(on).forEach(key => {
    const name = `on${key.charAt(0).toUpperCase()}${key.slice(1)}`
    el[name] = on[key]
  })
  return h(componentName, { ...attrs, ...props, ...slots, ...el }, children)
}
