/* eslint-disable no-console */
/* eslint-disable no-undef */
new Vue({
  el: '#vue-app',
  data: {
    available: false,
    nearby: false
  },
  methods: {
 
  },
  computed: {
    compClasses: function() {
      return {
        available: this.available,
        nearby: this.nearby
      }
    }
  }
});