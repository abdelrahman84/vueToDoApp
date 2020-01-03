import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   toDos: []
    
  },
  mutations: {
    addTodo(state, todo) {
      state.toDos.push(todo);
      localStorage.setItem('todos', JSON.stringify(state.toDos));
    },
  },
  actions: {
    addTodo({commit}, {todo}) {
      commit('addTodo', todo)
    }

  },
  getters: {
    getTodos(state) {
    const toDos = JSON.parse(localStorage.getItem('todos'));
      if (toDos && toDos.length > 0) {
        state.toDos = toDos;
      }
       return state.toDos;
    }

  }
})
