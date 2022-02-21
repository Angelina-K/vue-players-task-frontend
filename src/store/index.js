import Vue from 'vue';
import Vuex from 'vuex';

import { itemService } from '../services/itemService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    player: null,
    brand: null,
    currDataViewed: 'brand',
  },
  getters: {
    currDataViewed(state) {
      return state.currDataViewed;
    },
    data(state) {
      const viewBy = state.currDataViewed;
      return state[viewBy];
    },
  },
  mutations: {
    setBrand(state, { data }) {
      state.brand = data;
    },
    setPlayer(state, { data }) {
      state.player = data;
    },
    setViewBy(state, { viewBy }) {
      state.currDataViewed = viewBy;
    },
  },
  actions: {
    async loadData({ commit, state }) {
      const viewBy = state.currDataViewed;
      try {
        const data = await itemService.query(viewBy);
        commit({ type: viewBy === 'brand' ? 'setBrand' : 'setPlayer', data });
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {},
});
