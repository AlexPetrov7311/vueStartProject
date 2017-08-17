import types from '../mitation-types';

const state = {
  issues: [
    {
      title: 'store issue',
    },
  ],
};


const getters = {
  getIssues: state => state.issues,
};

const mutations = {
  [types.ADD_ISSUES](state, { title }) {
    state.issues.push({ title });
  },
};

const actions = {
  addIssues({ commit }, { title }) {
    commit(types.ADD_ISSUES, { title });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
