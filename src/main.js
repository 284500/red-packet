import { createApp } from 'vue'
import 'normalize.css'
//import './style.css'
import App from './App.vue'
import { Toast ,Icon} from 'vant';
import 'vant/es/toast/style'
// import Vant from 'vant'
// import 'vant/lib/index.css'


createApp(App).use(Toast).use(Icon).mount('#app')