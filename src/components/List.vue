<template>
  <div class="list">
    {{ todolist }}
    <list-item v-for="(item, key) in items" :item="item" :key="key"></list-item>
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
      items: [
        { title: 'Vue' },
        { titile: 'Unit Testing' },
      ],
    };
  },
};
</script>

<style>
  .list {
    background: greenyellow;
  }
</style>



