import Flexbox from './src/flexbox.vue'
import FlexboxItem from './src/flexbox-item.vue'

function install(Vue,options){
    Vue.component('flexbox',Flexbox)
    Vue.component('flexbox-item',FlexboxItem)
}
export {
    Flexbox,
    FlexboxItem,
    install
}