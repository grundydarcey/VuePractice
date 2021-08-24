/* eslint-disable no-console */
/* eslint-disable no-undef */

new Vue({
  el: '#vue-app',
  data: {
    output: 'Your fav food'
  },
  methods: {
    readRefs: function() {
      this.output = this.$refs.input.value;
    }
  }
});