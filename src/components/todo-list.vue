<template lang="html">
  <div>
    <div v-if="isEmpty">
      <h2>no toDos yet</h2>
    </div>

    <div v-if="!isEmpty">
      <v-container>
        <h2>To Dos:</h2>
        <div v-for="todo in toDos" :key="todo.id" :cols="todo.flex">
          <TodoItem :todo="todo"></TodoItem>
        </div>
      </v-container>

      <v-container>
        <h2>Completed:</h2>
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
      toDos: "getTodos"
    }),
    isEmpty() {
      return this.toDos.length === 0;
    }
  }
};
</script>

<style lang="css"></style>
