<template lang="html">
  <v-card>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{todo.title}}</h3>
      </div>
    </v-card-title>
    <v-btn>
      Complete
    </v-btn>
    <v-btn color="error" @click="deleteTodoMethod(todo)">
      Delete
    </v-btn>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: 'TodoItem',
  props: {
    todo: {}
  },
  methods : {
      ...mapActions(["deleteTodo"]),
      deleteTodoMethod(todo){
      this.deleteTodo({todo})

      }
  }
}
</script>

<style lang="css">
</style>
