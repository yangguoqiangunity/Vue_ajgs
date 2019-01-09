<template>
  <div class="main">

    <!--轮播图-->
    <mt-swipe class="mt-swipe" :auto="4000">
      <mt-swipe-item ><img  class="imgat" src="https://static.ajgs.cn/product/1543396275000-87BA6CB4.jpeg"/></mt-swipe-item>
      <mt-swipe-item ><img  class="imgat" src="https://static.ajgs.cn/product/1543396275000-87BA6CB4.jpeg"/></mt-swipe-item>
      <mt-swipe-item ><img  class="imgat" src="https://static.ajgs.cn/product/1543396275000-87BA6CB4.jpeg"/></mt-swipe-item>
    </mt-swipe>

    <!--button-->
    <ul class="mainmenu">
      <li><a href="/" ><b><img src="https://static.ajgs.cn/product/1546408861000-F0E028C5.jpeg" /></b><span>艾家生活</span></a></li>
      <li><a href="/" ><b><img src="https://static.ajgs.cn/product/1546408867000-E8302AEC.jpeg" /></b><span>新品NEW</span></a></li>
      <li><a href="/" ><b><img src="https://static.ajgs.cn/product/1546408867000-E8302AEC.jpeg" /></b><span>艾家厨房</span></a></li>
      <li><a href="/" ><b><img src="https://static.ajgs.cn/product/1546408879000-41C679CE.jpeg" /></b><span>艾家农副</span></a></li>
      <li><a href="/" ><b><img src="https://static.ajgs.cn/product/1546408888000-C79A04BF.jpeg" /></b><span>艾家生鲜</span></a></li>
      <li><a href="/" ><b><img src="https://static.ajgs.cn/product/1546408899000-B5A5480E.jpeg" /></b><span>艾家自营</span></a></li>
      <li><a href="/" ><b><img src="https://static.ajgs.cn/product/1546408905000-DC283637.jpeg" /></b><span>艾家校园</span></a></li>
      <li><a href="/" ><b><img src="https://static.ajgs.cn/product/1546408912000-E5678EE6.jpeg" /></b><span>海外精选</span></a></li>
    </ul>

    <!--图片广告-->
    <div class="pic">
          <img src="https://static.ajgs.cn/product/1544779754000-CA4724CE.jpeg" class="picItem">
          <div class="picItem">
            <img src="https://static.ajgs.cn/product/1544779835000-DF18AC5B.jpeg" class="picRTop1">
            <img src="https://static.ajgs.cn/product/1544779843000-551510F6.jpeg" class="picRTop2">
          </div>
    </div>
    <div class="pic">
      <img src="https://static.ajgs.cn/product/1544779851000-C526E532.jpeg" class="picItem">
      <div class="picItem">
        <img src="https://static.ajgs.cn/product/1544779861000-9C26526A.jpeg" class="picRTop1">
        <img src="https://static.ajgs.cn/product/1544779868000-700952B4.jpeg" class="picRTop2">
      </div>
    </div>
    <div class="background"></div>
    <div class="guess">
      --猜你喜欢--
    </div>

    <div class="goodMains" >
      <ul>
          <li class="homeGood"  @click="onClickGood(goodItem.id)"  v-for="(goodItem,index) in goodLise" :key="index">
            <div class="goodPic">
              <img :src="goodItem.goodsPic" alt="" class="goodPicImg">
            </div>
            <p class="goodName">{{goodItem.name}}</p>
            <div class="good">
              <span class="truePrice">{{goodItem.currentPrice}}</span>
              <s class="showPrice">{{goodItem.markPrice}}</s>
            </div>
          </li>
      </ul>
    </div>

  </div>
</template>

<script>
    export default {
      data(){
          return{
            goodLise:[]
          }
      },
      created(){
        this.$axios.get('/index/getMayYouLike',{
          param:{
            'size':20
          }
        })
          .then(response=>{
            console.log(response.data);
            this.goodLise=response.data.data.data;
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      mounted(){

      },

      methods:{
        onClickGood(id){
          console.log(id);
          this.$router.push({name:'homepage',params:{
            goodId:id,
            }});
        }
      },

    }

</script>

<style scoped>

  .showPrice{
    font-size: 11px;
    color: #8f8f94;
  }

  .truePrice{
    font-size: 13px;
    color: #ff5053;
    margin: 0 15px;
  }

  .goodName{
    margin: 0 15px;
    font-size: 13px;
    height: 40px;
    color: black;
  }

  .homeGood{
    width: 50%;
    float: left;
    height: 280px;
    list-style-type: none;
    background: white;
  }


  .goodPicImg{
    position: absolute;
    width: 100%;

    height: auto;
  }
  .goodPic{
    width: 80%;
    height: 180px;
    margin: 10%;
    overflow: hidden;
    position: relative;
    background:black;
    background: white;
  }

  .goodMains{
    display: flex;
    width: 100%;
  }

  .guess{
    height: 50px;
    line-height: 50px;
    width: 100%;
    text-align: center;
    background: white;
    margin-top: 10px;
  }


  .imgat{
    width: 100%;
    height: 100%;
  }

  .mt-swipe{
    height: 200px;
  }
  .main{
    margin-bottom: 50px;
  }

  html, body { color:#222; font-family:Microsoft YaHei, Helvitica, Verdana, Tohoma, Arial, san-serif; margin:0; padding: 0; text-decoration: none; }
  img { border:0; }
  ul { list-style: none outside none; margin:0; padding: 0; }
  body {
    background-color:#eee;
  }


  body .mainmenu:after { clear: both; content: " "; display: block; }

  body .mainmenu li{
    float:left;
    width: 25%;
    border-radius:3px;
    overflow:hidden;
  }

  body .mainmenu li a{ display:block;  color:#FFF;   text-align:center ;position: relative ;height: 90px ;width: 100%}
  body .mainmenu li a b{
    display:block; height:90px; position: absolute; width: 100%;
  }
  body .mainmenu li a img{
    width: 100%;
    height: 100%;
  }

  body .mainmenu li a span{
    display:block;
    width: 100%;
    height:30px;
    line-height:30px;
    background-color:#FFF;
    color: #000;
    font-size:14px;
    position: absolute ;
    bottom:0 }

  .pic{
    width: 100%;
    display: flex;
  }
  .picItem{
    float: left;
    width: 50%;
    height: 170px;
    border: 0;
  }

  .picRTop1{
    width: 100%;
    height: 50%;
  }
  .picRTop2{
    width: 100%;
    height: 50%;
    margin-top: -5px;
  }






</style>
