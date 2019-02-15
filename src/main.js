import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VeeValidate from 'vee-validate'
import { Validator } from 'vee-validate';
import store from './store'

const dict = {
  custom: {
    email: {
      required: 'Please submit your email ',
      email: 'Email is not in valid format'
    },
    firstname: {
      required: 'Your first name is empty'
    },
    lastname: {
    	required: 'Your last name is empty'
    },
    username: {
    	required: 'Username is required'
    },
    password: {
    	length: 'Password is too short',
    	required: 'Password is required'
    }
  }
};

Vue.use( VeeValidate, Vuex );
Validator.localize('en', dict);
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
