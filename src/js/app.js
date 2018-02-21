import App from './components/App.vue'
import Vue from 'vue'
import iView from 'iview'
import router from './router'


Vue.use(iView)

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: '#app',
    render: h => h(App),
    router,
  })
})
