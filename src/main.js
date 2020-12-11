import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { Button, Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

Vue.use(Button)

//  将弹框组件挂在到vue
Vue.prototype.$msg = Message
Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.filter('dateTime', function (data) {
    // const year = data.getFullYear()
    return data
})

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')
