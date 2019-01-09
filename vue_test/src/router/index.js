import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home/Home'
import classify from '@/components/home/Classify'
import specialy from '@/components/home/Specialy'
import aijia from '@/components/home/Aijia'
import user from '@/components/home/User'
import homePager from '@/components/HomePage'
import main from '@/components/Main'






Vue.use(Router)

export default new Router({
  // linkActiveClass:mui
  routes: [
    {path: '/main',name: 'main', component: main,children:[         //main入口
        {path: 'main_home',name: 'home', component: home},                    //首页
        {path: 'main_classify',name: 'classify', component: classify},        //专题
        {path: 'main_special',name: 'special', component: specialy},          //分类
        {path: 'main_aijia',name: 'aijia', component: aijia},                 //艾家
        {path: 'main_user',name: 'user', component: user},                    //我的
    ]},

    {path: '/homepage',name: 'homepage', component: homePager},     //商品详情
    {path: '/', redirect: '/main/main_home'},                                 //默认重定向

  ]
})
