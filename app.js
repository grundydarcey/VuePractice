/* eslint-disable no-console */
/* eslint-disable no-undef */
var data = {
    name: 'Yoshi'
}

Vue.component('greeting', {
  template: '<p>Im a {{ name }}. <button v-on:click='changeName'>Change name</button> </p>',
  data: function() {
    return data;
  },
  methods: {
    changeName: function() {
      this.name = 'Mario';
    }
  }
});

new Vue({
  el: '#vue-app-one'
});

new Vue({
  el: '#vue-app-two'
});