const mutations = {
  setNewUser (state, newUser) {
    state.newUser = newUser
  },
  addTags (state,newTags) {
  	state.newUser.tags = newTags
  }
}

export default mutations
