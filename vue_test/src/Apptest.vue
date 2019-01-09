<template>
  <div>
    <!--<h2 v-text="ms1"></h2>-->
    <!--<span v-text="bodys"></span>-->
    <!--<div v-html="htmls"></div>-->
    <!--<div style="width: 150px;height: 50px;background: aqua" v-if="isShow" ></div>-->


    <!--<div :class="isRed?'red':'green'">11111111</div>-->
    <!--<div :class="{'red':true,'big':true}">22222222</div>-->
    <!--<div :id="isRed?'lalla':'lalla'">33333333</div>-->
    <!--<div class="green big"> 44444444</div>-->
    <!--<button v-on:click="change()">点我上天</button>-->
    <!--<div :class={red,big}>5555555</div>-->
    <!--<div :class="'yellow'">6666666</div>-->


    <!--<ul>-->
      <!--<li v-for="stu in stus" :class="{'A':'red','B':'green'}[stu.score]">-->
        <!--{{stu.name}}-->
      <!--</li>-->
    <!--</ul>-->

    <!--<ul>-->
      <!--<li v-for="(people,index) in heros" :key="index" :class="[{'A':'yellow','B':'red','C':'green','D':'green','E':'green'}[people.id||'A'],'noIcon']">-->
        <!--{{people.name}}    {{people.srore}}-->
      <!--</li>-->
    <!--</ul>-->

    <!--添加一个姓名<input type="text" width="200px" v-model="name"/>-->
    <!--添加一个成绩<input type="text" width="200px" v-model="srore"/>-->
    <!--<button @click="addPeople()">添加</button>-->

    <!--<header-vue></header-vue>-->
    <!--<body-vue></body-vue>-->
    <!--<fooder-vue></fooder-vue>-->



    <!--<router-link :to="{name:'static'}">拜拜啦</router-link>-->
    <!--<router-view></router-view>-->

    <!--<ul>-->
      <!--<li v-for="(hero,index) in heros" :key="index">{{hero.name}} <router-link class="link" :to="{name:'detial',query:{id:index}}">查看</router-link></li>-->
    <!--</ul>-->
    <!--<router-view></router-view>-->
    <button @click="clicksss">
      点点看
    </button>

  </div>
</template>

<script>
  import headerVue from './components/Header'
  import bodyVue from './components/Body'
  import fooderVue from './components/Fooder'
  export default {
  data() {
    return {
      name:"111111",
      srore:"",

      // bodys: '23232',
      // ms1: '2222344',
      // htmls: '<ul> <li>sssddd</li></ul>',
      // isShow: true,
      // isRed: true,
      // stus: [{name: 'jack', score: 'A'}, {name: 'rose', score: 'B'}],
      //
      // big:"big",
      // red:'red',
      heros:
        [{id:'A',name:'一哈',srore:'A'},
         {id:'C',name:'二哈',srore:'C'},
         {id:'A',name:'三哈',srore:'A'},
         {id:'B',name:'四哈',srore:'B'},
         {id:'C',name:'雾哈',srore:'C'}]
    }
  },

  methods:{
    change(){
      this.isRed=!this.isRed;
      this.stus.push({name: 'jack2', score: 'A'});
    },

    isDefalts(text){
      if (text=='A'||text=='B'||text=='C'||text=='D'){
        return text
      } else {
        return "E"
      }
    },

    addPeople(){
      var  text=this.srore;
      if (text=='A'||text=='B'||text=='C'||text=='D'){
      } else {
        text= "E"
      }
      this.heros.push({
      id:text,
      name:this.name,
      srore:this.srore}
      )
    },

    clicksss(){
        this.$axios.post("https://api.ajgs.cn/theme/index",
          {param:{
            page:1,
            max:10
          }})
          .then(res=>{
            console.log(res.data);
          });
    }

  },

  components:{
    headerVue,
    bodyVue,
    fooderVue
  }

}


</script>

<style scoped>
  .red{
    background: red;
    width: 400px;
  }
  .green{
    background: green;
    width: 400px;
  }

  .yellow{
    background: yellow;
    width: 400px;
  }

  .big{
    font-size: 55px;
  }
  #lalla{
    font-size: 55px;
  }

  li{
    list-style: none;
    width: 500px;
    height: 100px;
  }
  ul{
    background: skyblue;
  }
  .link{
    margin-left: 100px;
  }


</style>
