import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    toDos: [],
    toDosCompleted: []

  },
  mutations: {
    addTodo(state, todo) {
      state.toDos.push(todo);
      localStorage.setItem('todos', JSON.stringify(state.toDos));
    },
    deleteTodo(state, todo) {
      state.toDos = state.toDos.filter((val) => val.id !== todo.id);
      state.toDosCompleted = state.toDosCompleted.filter((val) => val.id !== todo.id);
      localStorage.setItem('todos', JSON.stringify(state.toDos));
      localStorage.setItem('completedTodos', JSON.stringify(state.toDosCompleted));
    },
    completeToDo(state, todo) {
      state.toDos = state.toDos.filter((val) => val.id !== todo.id);
      todo.completed = true;
      state.toDosCompleted.push(todo);
      localStorage.setItem('todos', JSON.stringify(state.toDos));
      localStorage.setItem('completedTodos', JSON.stringify(state.toDosCompleted));

    }
  },
  actions: {
    addTodo({ commit }, { todo }) {
      commit('addTodo', todo)
    },
    deleteTodo({ commit }, { todo }) {
      commit('deleteTodo', todo)
    },
    completeToDo({ commit }, { todo }) {
      commit('completeToDo', todo)
    }

  },
  getters: {
    getTodos(state) {
      const toDos = JSON.parse(localStorage.getItem('todos'));
      if (toDos && toDos.length > 0) {
        state.toDos = toDos;
      }
      return state.toDos;
    },
    getCompletedTodos(state) {
      const completedToDos = JSON.parse(localStorage.getItem('completedTodos'));
      if (completedToDos && completedToDos.length > 0) {
        state.toDosCompleted = completedToDos;
      }
      return state.toDosCompleted;
    }

  }
})
