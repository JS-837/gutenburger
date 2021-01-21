import Vue from 'vue'
import Gutenburger from './components/Gutenburger.vue';

Vue.config.productionTip = false

new Vue({
  el: '#gutenburger',
  data: {

  },
  components: {
    Gutenburger: Gutenburger,
  }
});
