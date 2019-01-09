<template>

  <div>
    <router-view>

    </router-view>
    <nav class="mui-bar mui-bar-tab">
      <a @click="mainClick(1)" class="mui-tab-item"   >
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label" :class="{chooseColor:clickIndex==1}">首页</span>
      </a>
      <a @click="mainClick(2)" class="mui-tab-item" >
        <span class="mui-icon mui-icon-email"><!--<span class="mui-badge">9</span>--></span>
        <span class="mui-tab-label" :class="{chooseColor:clickIndex==2}">分类</span>
      </a>
      <a @click="mainClick(3)" class="mui-tab-item" >
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label" :class="{chooseColor:clickIndex==3}">专题</span>
      </a>
      <a @click="mainClick(4)" class="mui-tab-item" >
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label" :class="{chooseColor:clickIndex==4}">艾家</span>
      </a>
      <a @click="mainClick(5)" class="mui-tab-item" >
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label" :class="{chooseColor:clickIndex==5}">我的</span>
      </a>
    </nav>

  </div>

</template>

<script>
    export default {
      data() {
        return {
          clickIndex:1,
        }
      },

      created(){
      },

      mounted(){
      },

      methods:{
        mainClick(type){
          switch (type){
            case 1:
              this.clickIndex=1;
              this.$router.replace({name:'home'});
              break;
            case 2:
              this.clickIndex=2;
              this.$router.replace({name:'classify'});
              break;
            case 3:
              this.clickIndex=3;
              this.$router.replace({name:'special'});
              break;
            case 4:
              this.clickIndex=4;
              this.$router.replace({name:'aijia'});
              break;
            case 5:
              this.clickIndex=5;
              this.$router.replace({name:'user'});
              break;
          }
        }
      }

    }
</script>

<style scoped>
  .chooseColor{
    color: #007aff;
  }
</style>
