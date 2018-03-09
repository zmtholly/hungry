import Vue from 'vue';
import Router from 'vue-router';
import VueResource from 'vue-resource';
import goods from '@/components/goods/goods';
import ratings from '@/components/ratings/ratings';
import seller from '@/components/seller/seller';

import '@/common/stylus/index.styl';
Vue.use(Router);
Vue.use(VueResource);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'goods',
      component: goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    }
  ]
});
