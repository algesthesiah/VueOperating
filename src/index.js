import VueOperating from './VueOperating'

VueOperating.install = function(Vue) {
  Vue.component(VueOperating.name, VueOperating)
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueOperating)
}

export default VueOperating
