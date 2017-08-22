<template>
  <div class="container control column is-half">
    <div class="">
      <label class="label">Name</label>
      <div class="columns">
        <div class="column">
          <input class="input" type="text" v-model="text">
        </div>
        <div class="column">
        <button class="button is-primary" @click="addIssue()">Add Issue</button>
        </div>
      </div>
    </div>
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
      // this.$store.commit('ADD_ISSUES', { title: this.text }); equivalent next line
      this.$store.dispatch('addIssues', { title: this.text });
    },
  },
};
</script>

<style scoped>

</style>
