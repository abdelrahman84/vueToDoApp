<template lang="html">
  <v-container>
     <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      label="Todo"
      placeholder="What do you have to do?"
      solo
      v-model="todo"
      required
    />
    </v-text-field>
    <v-btn small color="primary" @click="addTodoMethod()" :disabled="!valid">Add ToDo</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import uuid from 'uuid/v4'
export default {
  name: "TodoForm",
  data() {
    return {
      valid: true,
      todo: null
    };
  },
  mounted() {},
  methods: {
    ...mapActions(["addTodo"]),
    addTodoMethod() {
      const todo = {
        title: this.todo,
        completed: false,
        id: uuid()
      };
      this.addTodo({todo});
      this.todo = ''
      
    },
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    }
  }
};
</script>

<style lang="css"></style>
