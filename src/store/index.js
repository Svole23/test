import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    newUser: {
      tags: []
    },
    tags: [
      {
        title: 'music'
      },
      {
        title: 'video'
      },
      {
        title: 'art'
      },
      {
        title: 'photograph'
      },
      {
        title: 'cars'
      },
      {
        title: 'boats'
      },
      {
        title: 'bikes'
      },
      {
        title: 'phones'
      }
    ]
  },
  getters,
  mutations
})

export default store
