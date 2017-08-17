<template>
  <div>
  <input type="text" v-model="text">
  <button @click="addIssue()">Add Issue</button>
  {{ text }}
  </div>
</template>

<script>
export default {
  name: 'todoInput',
  data() {
    return {
      text: '',
    };
  },
  methods: {
    addIssue() {
      console.log('addIssues');
      console.log(this.$store);

      this.$store.dispatch('addIssues', { title: this.text });
    },
  },
};
</script>

<style scoped>

</style>
