<template>
    <div class="index">
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <a href="#/" class="router-link-active">首页</a> &gt;
                <a href="#/site/goodslist" class="router-link-exact-active router-link-active">购物商城</a>
            </div>
        </div>
        <div class="section">
            <div class="wrapper">
                <div class="wrap-box">
                    <div class="left-220" style="margin: 0px;">
                        <div class="banner-nav">
                            <ul>
                                <li v-for="(item, index) in catelist" :key="item.id">
                                    <h3>
                                        <i class="iconfont icon-arrow-right"></i>
                                        <span>{{item.title}}</span>
                                        <p>
                                            <span v-for="(i, index) in item.subcates" :key="i.id">
                                                {{i.title}}
                                            </span>
                                         
                                        </p>
                                    </h3>
                                    <div class="item-box">
                                        <dl>
                                            <dt>
                                                <a href="/goods/40.html">{{item.title}}</a>
                                            </dt>
                                            <dd>
                                                <a href="/goods/43.html" v-for="(i, index) in item.subcates" :key="i.id">{{i.title}}</a>

                                            </dd>
                                        </dl>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--幻灯片-->
                    <div class="left-705">
                        <div class="banner-img">
                              <el-carousel :interval="5000" arrow="always">
                                <el-carousel-item v-for="(item, index) in sliderlist" :key="item.id">
                                    <img :src="item.img_url" alt="item.title">
                                </el-carousel-item>
                                </el-carousel>
                         </div>
                    </div>
                    <!--/幻灯片-->
                    <div class="left-220">
                        <ul class="side-img-list">
                            <li v-for="(item, index) in sliderlist" :key="item.id">
                                <div class="img-box">
                                    <label>{{index+1}}</label>
                                    <img :src="item.img_url">
                                </div>
                                <div class="txt-box">
                                <a href="/goods/show-98.html">{{item.title}}</a>
                                    <span>{{item.add_time | shaixuan}}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="section" v-for="(item, index) in  goodsList" :key="index">
            <div class="main-tit">
                <h2>{{item.catetitle}}</h2>
                <p>
                    <a href="/goods/43.html" v-for="(itemson, index) in item.level2catelist">{{itemson.subcatetitle}}</a>  
                    <a href="/goods/40.html">更多
                        <i>+</i>
                    </a>
                </p>
            </div>
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <ul class="img-list">
                        <li v-for="(i, index) in item.datas" :key="i.cataID">
                            <a href="#/site/goodsinfo/87" class="">
                                <div class="img-box">
                                    <img :src="i.img_url" v-lazy="i.img_url">
                                </div>
                                <div class="info">
                                    <h3>{{i.artTitle}}</h3>
                                    <p class="price">
                                        <b>{{i.sell_price}}</b>元</p>
                                    <p>
                                        <strong>库存{{i.stock_quantity}}</strong>
                                        <span>市场价：
                                            <s>{{i.market_price}}</s>
                                        </span>
                                    </p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
//引入axios
import axios from 'axios'
//引入moment.js模块
import moment from 'moment'
//引入element-ui模块
import elementui from 'element-ui'
export default {
    //参数
    data:()=>{
        return {
            catelist:[],
            sliderlist:[],
            toplist:[],
            goodsList:[]
        }
    },
    filters:{
        shaixuan(val){
            moment(val).format("YYYY年MM月DD日")
        }
    },
    //生命周期函数
    beforeMount() {
       axios.get("http://47.106.148.205:8899/site/goods/gettopdata/goods")
      .then(res=>{
        // console.log(res);
        this.catelist=res.data.message.catelist;
        this.sliderlist=res.data.message.sliderlist;
        this.toplist=res.data.message.toplist;
      })
      .catch(res=>{
        // console.log(res);
      });
      axios.get('http://47.106.148.205:8899/site/goods/getgoodsgroup')
      .then(res=>{
          console.log(res);
          this. goodsList=res.data.message
      })
      .catch(res=>{
          console.log(res);
      })
    },
}
</script>
<style scoped>
    .el-carousel{
        height: 341px;
    }
     .el-carousel .el-carousel__item{
         height: 341px;
     }
      .el-carousel .el-carousel__item img{
         height: 341px;
     }

</style>


