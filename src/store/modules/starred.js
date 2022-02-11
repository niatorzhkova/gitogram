import * as api from '../../api'
// import trendings from './trendings'

export default {
  namespaced: true,
  state: {
    starred: []
  },
  mutations: {
    SET_STARRED (state, payload) {
      state.starred = payload
      // .map(item => {
      //   item.issues = {
      //     data: null,
      //     loading: false,
      //     error: ''
      //   }
      //   return item
      // })
      // state.data.trendings = payload
    },
    SET_ISSUES: (state, payload) => {
      state.starred = state.starred.map(item => {
        if (payload.id === item.id) {
          item.issues = payload.issues
        }
        return item
      })
    }
  },
  actions: {
    async fetchStarred ({ commit }) {
      try {
        const { data } = await api.starred.fetchStarred()
        commit('SET_STARRED', data)
      } catch (e) {
        console.log(e)
      }
    },
    async fetchIssues ({ commit }, { id, owner, repo }) {
      try {
        const { data } = await api.issues.fetchIssues({ owner, repo })
        if (data.length !== 0) {
          commit('SET_ISSUES', {
            id,
            issues: data
          })
        } else {
          commit('SET_ISSUES', {
            id,
            issues: [{ no_issue: 'No issues yet' }]
          })
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}
