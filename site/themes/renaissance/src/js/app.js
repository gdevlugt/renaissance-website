import $ from "jquery";
import _ from 'lodash';
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

/**
 * Vue components
 */

/**
 * Let Vue use Bootstrap Vue.
 */
Vue.use(BootstrapVue);

/**
 * This is our main Vue app.
 */
const app = new Vue({
    el: '#app'
});