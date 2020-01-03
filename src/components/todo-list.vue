<template lang="html">
  <div>
    <div v-if="isEmpty && completedIsEmpty">
      <h2>NO ToDos YET</h2>
    </div>

    <div v-if="!isEmpty">
      <v-container>
        <h2>To Dos:</h2>
        <div v-for="todo in toDos" :key="todo.id" :cols="todo.flex">
          <TodoItem :todo="todo"></TodoItem>
        </div>
      </v-container>
    </div>

    <div v-if="!completedIsEmpty">
      <v-container>
        <h2>Completed:</h2>
        <div v-for="todo in completedToDos" :key="todo.id" :cols="todo.flex">
          <TodoItem :todo="todo"></TodoItem>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
import TodoItem from "@/components/todo-item";
import { mapGetters } from "vuex";

export default {
  components: {
    TodoItem
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      toDos: "getTodos",
      completedToDos: "getCompletedTodos"
    }),
    isEmpty() {
      return this.toDos.length === 0;
    },
    completedIsEmpty() {
      return this.completedToDos.length === 0;
    }
  }
};
</script>

<style lang="css"></style>
