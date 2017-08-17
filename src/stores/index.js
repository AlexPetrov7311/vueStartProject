import Vue from 'vue';
import Vuex from 'vuex';
import todoIssues from './modules/todoIssues';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todoIssues,
  },
  strict: true,
});
