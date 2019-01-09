<template>
    <div>

      <!--专题title-->

      <div class="titleTop">
        <div class="title">
          <h4>专题</h4>
          <img src="../../assets/img/fanhui.png" class="finish"/>
          <img src="../../assets/img/mainshopcarblack.png" class="share"/>
          <img src="../../assets/img/mainsousuoblack.png" class="shopCar"/>
        </div>

        <!--一级分类-->
        <div class="mv-tabs">
          <div class="tabs" >
            <ul >
              <li v-for="(item, index) in horztList" :key="index" class="tab-item">
                <img :src="item.picture" class="itemImg"/>
                <span v-text="item.name" class="itemName"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!--内容-->
      <ul class="contentMain">
        <li v-for="(item,index) in vertkList" :key="index">
          <div class="content">
            <img :src="item.picture" alt="" class="contentImg">
            <span v-text="item.name"></span>
          </div>
        </li>
      </ul>

    </div>


</template>

<script>
    export default {
      data(){
        return{
          horztList:[],
          vertkList:[],

        }
      },

      created(){
        this.$axios.get('/theme/index',{
          param:{
            'parentId':'',
            'page':1,
            'max':10
          }
        })
          .then(response=>{
            this.horztList=response.data.data[0].typeAllList;
            this.vertkList=response.data.data[0].allDetailList.list;
          })
          .catch(function (error) {
            console.log(error);
          });
      },

      methods:{

      }
    }
</script>

<style scoped>
  .title{
    height: 50px;
    position: relative;
    background: white;
  }
  h4{
    line-height: 50px;
    position: absolute;
    left: 50%;
    margin: 0;
    margin-left: -20px;
  }
  .finish {
    width: 20px;
    height: 20px;
    margin-top: 15px;
    left: 15px;
    position: absolute;

  }

  .share{
    width: 20px;
    height: 20px;
    margin-top: 15px;
    right: 15px;
    position: absolute;
  }

  .shopCar{
    width: 20px;
    height: 20px;
    margin-top: 15px;
    right: 55px;
    position: absolute;
  }
  .mv-tabs{
    position: relative;
    bottom: 0;
    width: 100%;
    background: white;
  }

  .tabs{
    height :50px;
    width :100%;
    line-height :2.5rem;
    box-sizing :border-box;
    overflow :hidden;
    white-space :nowrap;
  }

  .tab-item{
    float :left;
    width :70px;
    height :50px;
    position: relative;
    text-align :center  ;
  }
  .itemS{
    width: 70px;
    height: 30px;

  }
  .itemImg{
    width: 30px;
    height: 30px;
    position: absolute;
    left: 45px;
    border-radius:15px
  }
  .itemName{
    font-size: 11px;
    position: absolute;
    bottom: 0;
    line-height: 20px;
  }

  .content{
    width: 100%;
    height: 220px;
    padding-left: 10px;
    padding-right: 10px;
    background: white;

  }

  .contentMain{
    padding-top: 100px;
  }


  .contentImg{
    width: 100%;
    height: auto;

  }

  .titleTop{
    position: fixed;
    width: 100%;
  }





</style>
