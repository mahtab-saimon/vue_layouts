import Vue from 'vue'
import App from './App.vue'
import router from './router'
import bootstrapCss from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Jquery from 'jquery'
window.$ = window.jQuery =Jquery
import popper from 'popper.js'
import bootstrapjs from '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import iziTostCss from '../node_modules/izitoast/dist/css/iziToast.min.css'
import iziTostJs from '../node_modules/izitoast/dist/js/iziToast'

window.iziToast = iziTostJs;

// sweet sweetalert2
import Swal from 'sweetalert2'
window.Swal = Swal;
// const Swal = require('sweetalert2');
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});
window.Toast = Toast;


import axios from 'axios'
Vue.prototype.$http = axios
import { Form, HasError, AlertError } from 'vform'
window.Form = Form,
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

Vue.component('pagination', require('laravel-vue-pagination'));

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
