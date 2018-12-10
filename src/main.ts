import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

if ("serviceWorker" in navigator){
  navigator.serviceWorker.register("/sw.js")
  .catch( () => {} );
}