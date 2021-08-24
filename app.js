/* eslint-disable no-console */
/* eslint-disable no-undef */
var one = new Vue({
  el: '#vue-app-one',
  data: {
    title: 'Vue App one'
  },
  methods: {
 
  },
  computed: {
    greet: function() {
      return 'Hello from app one';
    }
  }
});

var two = new Vue({
  el: '#vue-app-two',
  data: {
    title: 'Vue app two'
  },
  methods: {
    changeTitle: function() {
      one.title = 'Title changed'
    }
  },
  computed: {
    greet: function() {
      return 'Hello from app tew';
    } 
  }
});

two.title = 'changed from outside instance'