/* eslint-disable no-undef */
new Vue({
  el: '#vue-app',
  data: {
    name: 'Darcey',
    job: 'Software Application Developer',
    website: 'http://www.twitter.com',
    websiteTag: '<a href="https://twitter.com">Twittah</a>'
  },
  methods: {
    greet: function(time) {
      return 'Good ' + time + ', ' + this.name;
    }
  }
});