import './index.js';
import '~/assets/css/bulma.css';
/*import '~/assets/css/bulmacore.css';*/
import '~/assets/css/nav.css';
import DefaultLayout from '~/layouts/Default.vue'
export default function (Vue,{ head, router, isServer } ) {
  Vue.component('Layout', DefaultLayout)
}
