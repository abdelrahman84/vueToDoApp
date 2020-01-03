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
    <v-btn color="error">
      Delete
    </v-btn>
  </v-card>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: {}
  }
}
</script>

<style lang="css">
</style>
