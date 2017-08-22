<template>
  <div class="container control column is-half panel">

    <list-item v-for="(item, key) in items" :issue="item" :key="key"></list-item>
  </div>
</template>

<script>
import listItem from './ListItem';

export default {
  components: { listItem },
  name: 'list',
  data() {
    return {
      todolist: 'To-do list',
    };
  },
  computed: {
    items() {
      return this.$store.getters.getIssues;
    },
  },
};
</script>

<style>
  .list {
    background: greenyellow;
  }
</style>



