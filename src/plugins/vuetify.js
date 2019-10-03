import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import axios from 'axios';
import VueAxios from 'vue-axios';
 
Vue.use(VueAxios, axios);

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
});
