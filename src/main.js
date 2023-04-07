import Vue from 'vue'
import App from './App.vue'
import BaseCard from './components/UI/BaseCard'
import Basebutton from './components/UI/Basebutton'

Vue.config.productionTip = false
Vue.component('BaseCard',BaseCard),
Vue.component('Basebutton',Basebutton)
new Vue({
  render: h => h(App),
}).$mount('#app')
