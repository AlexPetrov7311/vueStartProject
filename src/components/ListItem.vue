<template>
  <div @click="changeItem()">
    {{ issue.title }}
  </div>
</template>

<script>
export default {
  name: 'listItem',
  props: ['issue'],
  data() {
    return {
      item: 'Default value for item',
    };
  },
  methods: {
    changeItem() {
      console.log('this.item.title');
      // const item = this.issue;
      // item.title = `${item.title} asdasd`;
    },

  },
};
</script>

<style scoped>

</style>


