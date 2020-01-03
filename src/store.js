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
    deleteTodo(state, todo) {
      state.toDos = state.toDos.filter((val) => val.id !== todo.id);
      localStorage.setItem('todos', JSON.stringify(state.toDos));
    },
    completeToDo(state, todo) {
     state.toDos.map((val) => {
       if (val.id === todo.id) {
         todo.completed = true
       }
       return todo;
     });
     localStorage.setItem('todos', JSON.stringify(state.toDos));

    }
  },
  actions: {
    addTodo({commit}, {todo}) {
      commit('addTodo', todo)
    },
    deleteTodo({commit}, {todo}){
      commit('deleteTodo', todo)
    },
    completeToDo({commit}, {todo}){
      commit('completeToDo', todo)
    }

  },
  getters: {
    getTodos(state) {
    const toDos = JSON.parse(localStorage.getItem('todos'));
      if (toDos && toDos.length > 0) {
        state.toDos = toDos.filter(todo => todo.completed == false);
      }
       return state.toDos;
    }

  }
})
