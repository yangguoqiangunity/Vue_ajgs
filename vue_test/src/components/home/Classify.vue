<template>
    <div>
      <div class="titleTop">
        <div class="title">
          <h4>分类</h4>
          <img src="../../assets/img/fanhui.png" class="finish"/>
          <img src="../../assets/img/mainshopcarblack.png" class="share"/>
          <img src="../../assets/img/mainsousuoblack.png" class="shopCar"/>
        </div>
      </div>

      <div class="next">
          <div v-for="(item ,index) in classifyList" :key="index">
            <div class="nextTitle">
              <span v-text="item.name" class="nextTitle_name"></span>
              <span class="nextTitle_more">更多</span>
            </div>

            <ul class="childern_ui">
              <li v-for="(itemTwo,indexTwo) in item.childrens" :key="indexTwo" class="childern_li" >
                <div class="chlidern">
                  <div class="childern_Img">
                      <img :src="itemTwo.icon" class="childern_Imgs"/>
                  </div>
                  <span class="childern_name">{{itemTwo.name}}</span>
                </div>
              </li>
            </ul>

            <div class="childern_bg">

            </div>

          </div>

      </div>


    </div>
</template>

<script>
    export default {
        data(){
          return{
            classifyList:[]
          }

        },
        created(){
          this.$axios.get('/menu/loadGoodsMenu')
            .then(response=>{
              this.classifyList=response.data.data;
            })
            .catch(function (error) {
              console.log(error);
            });
      },
    }
</script>

<style scoped>

  .childern_name{
    font-size: 10px;
    text-align: center;
    display:block;
    width: 100%;
    overflow: hidden;
    max-lines: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .childern_bg{
    background: ghostwhite;
    height: 10px;
  }

  div{
    background: white;
  }

  .childern_ui{
    display: flex;
    flex-wrap: wrap;
  }

  .childern_li{
    float: left;
    height: 80px;
    width: 25%;
    flex-direction: column;
  }
  .chlidern{
    width: 100%;
    height: 80px;
    position: relative;
  }

  .childern_Imgs{
    width: 60%;
    height: auto;
  }
  .childern_Img{
    width: 100%;
    height: auto;
    text-align: center;
  }


  li{
    list-style: none;
    background: white;
  }
  .nextTitle_more{
    position: absolute;
    right: 10px;
    line-height: 50px;
    font-size: 10px;
  }


  .next{
    padding-top: 50px;
    width: 100%;
  }

  .nextTitle_name{
    line-height: 50px;
    position: absolute;
    left: 10px;
    font-size: 12px;
  }

  .nextTitle{
    width: 100%;
    height: 50px;
    position: relative;
    background: white;
  }

  .titleTop{
    position: fixed;
    width: 100%;
  }
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
</style>
