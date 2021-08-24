/* eslint-disable no-undef */
new Vue({
  el: '#vue-app',
  data: {
    name: 'Darcey',
    job: 'Software Application Developer'
  },
  methods: {
    greet: function(time) {
      return 'Good ' + time + ', ' + this.name;
    }
  }
});