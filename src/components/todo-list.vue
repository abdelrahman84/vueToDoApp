<template lang="html">
  <div>
    <div v-if="isEmpty">
      <p>no toDos yet</p>
    </div>

    <div v-if="!isEmpty">
      <v-container>
   
          <div v-for="todo in toDos" :key="todo.id" :cols="todo.flex">
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
      toDos: "getTodos"
    }),
    isEmpty() {
      return this.toDos.length === 0;
    }
  }
};
</script>

<style lang="css"></style>
