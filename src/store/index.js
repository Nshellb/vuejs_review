import { createStore } from 'vuex'

export default createStore({
  state: {
    username: "null",
  },
  getters: {
  },
  mutations: {
    changeUnserName (state, username) {
      state.username = [].concat(username); // 2. state에 저장
    } 
  },
  actions: {
    async changeUserName({ commit }) { // 1. mutation 호출
      const randnum = Math.random();
      commit('changeUnserName', randnum);
    }
  },
  modules: {
  }
})
