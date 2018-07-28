<template>
     <div>
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <a href="/index.html">首页</a> &gt;
                <a href="/goods.html">购物商城</a> &gt;
                <a href="/goods/42/1.html">商品详情</a>
                <a href="#"><Icon type="logo-chrome" /></a>
               
            </div>
        </div>
        <div class="section">
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <div class="left-925">
                        <div class="goods-box clearfix">
                            <div class="pic-box" v-if="this.imglist.length!=0">
                                 <ProductZoomer
                                    :baseImages="images"
                                    :base-zoomer-options="zoomerOptions"
                                ></ProductZoomer>
                            </div>
                            <div class="goods-spec">
                                <h1>{{goodsinfo.title}}</h1>
                                <p class="subtitle">{{goodsinfo.sub_title}}</p>
                                <div class="spec-box">
                                    <dl>
                                        <dt>货号</dt>
                                        <dd id="commodityGoodsNo">{{goodsinfo.goods_no}}</dd>
                                    </dl>
                                    <dl>
                                        <dt>市场价</dt>
                                        <dd>
                                            <s id="commodityMarketPrice">¥{{goodsinfo.market_price}}</s>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>销售价</dt>
                                        <dd>
                                            <em id="commoditySellPrice" class="price">¥{{goodsinfo.sell_price}}</em>
                                        </dd>
                                    </dl>
                                </div>
                                <div class="spec-box">
                                    <dl>
                                        <dt>购买数量</dt>
                                        <dd>
                                            <div class="stock-box">
                                                <div class="el-input-number el-input-number--small">
                                                    <span role="button" class="el-input-number__decrease" :class="{'is-disabled':num==1}"  @click="num==1?1:num--">
                                                        <i class="el-icon-minus"></i>
                                                    </span>
                                                    <span role="button" class="el-input-number__increase" :class="{'is-disabled':num==goodsinfo.stock_quantity}"  @click="num<goodsinfo.stock_quantity?num++:goodsinfo.stock_quantity">
                                                        <i class="el-icon-plus"></i>
                                                    </span>
                                                    <div class="el-input el-input--small">
                                                        <!---->
                                                        <input v-model="num" autocomplete="off" size="small" type="text" rows="2" max="60"
                                                            min="1" validateevent="true" class="el-input__inner" role="spinbutton"
                                                            aria-valuemax="60" aria-valuemin="1" aria-valuenow="1" aria-disabled="false">
                                                        <!---->
                                                        <!---->
                                                        <!---->
                                                    </div>
                                                </div>
                                            </div>
                                            <span class="stock-txt">
                                                库存
                                                <em id="commodityStockNum">{{goodsinfo.stock_quantity}}</em>件
                                            </span>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dd>
                                            <div id="buyButton" class="btn-buy">
                                                <button onclick="cartAdd(this,'/',1,'/shopping.html');" class="buy">立即购买</button>
                                                <button onclick="cartAdd(this,'/',0,'/cart.html');" class="add">加入购物车</button>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div id="goodsTabs" class="goods-tab bg-wrap">
                        <Affix>
                            <div id="tabHead" class="tab-head" style="position: static; top: 517px; width: 925px;">
                                <ul>
                                    <li>
                                        <a @click="isShow=true" href="javascript:;" :class="{selected:isShow}">商品介绍</a>
                                    </li>
                                    <li>
                                        <a @click="isShow=false" href="javascript:;" :class="{selected:!isShow}">商品评论</a>
                                    </li>
                                </ul>
                            </div>
                            </Affix>
                            <div v-html="goodsinfo.content" class="tab-content entry" :style="{display: isShow?'block':'none'}">
                                
                            </div>
                            <div class="tab-content" :style="{display: !isShow?'block':'none'}">
                                <div class="comment-box">
                                    <div id="commentForm" name="commentForm"
                                        class="form-box">
                                        <div class="avatar-box">
                                            <i class="iconfont icon-user-full"></i>
                                        </div>
                                        <div class="conn-box">
                                            <div class="editor">
                                                <textarea id="txtContent" name="txtContent" sucmsg=" " datatype="*10-1000" nullmsg="请填写评论内容！"></textarea>
                                                <span class="Validform_checktip"></span>
                                            </div>
                                            <div class="subcon">
                                                <input id="btnSubmit" name="submit" type="submit" value="提交评论" class="submit">
                                                <span class="Validform_checktip"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <ul id="commentList" class="list-box">
                                        <p style="margin: 5px 0px 15px 69px; line-height: 42px; text-align: center; border: 1px solid rgb(247, 247, 247);">暂无评论，快来抢沙发吧！</p>
                                        <li>
                                            <div class="avatar-box">
                                                <i class="iconfont icon-user-full"></i>
                                            </div>
                                            <div class="inner-box">
                                                <div class="info">
                                                    <span>匿名用户</span>
                                                    <span>2017/10/23 14:58:59</span>
                                                </div>
                                                <p>testtesttest</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="avatar-box">
                                                <i class="iconfont icon-user-full"></i>
                                            </div>
                                            <div class="inner-box">
                                                <div class="info">
                                                    <span>匿名用户</span>
                                                    <span>2017/10/23 14:59:36</span>
                                                </div>
                                                <p>很清晰调动单很清晰调动单</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div class="page-box" style="margin: 5px 0px 0px 62px;">
                                        <div id="pagination" class="digg">
                                            <span class="disabled">« 上一页</span>
                                            <span class="current">1</span>
                                            <span class="disabled">下一页 »</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="left-220">
                        <div class="bg-wrap nobg">
                            <div class="sidebar-box">
                                <h4>推荐商品</h4>
                                <ul class="side-img-list">
                                    <li v-for="(item, index) in hotgoodslist" :key="item.id">
                                        <div class="img-box">
                                            <router-link :to="'/goodsInfo/'+item.id">
                                                <img :src="item.img_url">
                                            </router-link>
                                        </div>
                                        <div class="txt-box">
                                            <router-link :to="'/goodsInfo/'+item.id">{{item.title}}</router-link>
                                            <span>{{item.add_time|shaixuan}}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <BackTop></BackTop>
    </div>
</template>
<script>
//导入放大镜组件
import ProductZoomer from 'vue-product-zoomer';
export default {
    name:"goodsinfo",
    data:()=>{
        return{
            goodsinfo:{},
            hotgoodslist:[],
            imglist:[],
            isShow:true,
            num:1,
              // 轮播图的数据
      images: {
        normal_size: []
      },
      // 轮播图的配置
      zoomerOptions: {
        zoomFactor: 3,
        pane: "container-round",
        hoverDelay: 300,
        namespace: "inline-zoomer",
        move_by_click: true,
        scroll_items: 5,
        choosed_thumb_border_color: "#bbdefb"
      }
        }
    },
    methods:{
        getgoodsInfo(){
              // 强制初始化
      this.imglist = [];
      // 清空预览图片的数组
      this.images.normal_size = [];
             this.axios.get(`http://47.106.148.205:8899/site/goods/getgoodsinfo/${this.$route.params.id}`)
        .then(re=>{
            // console.log(re);
             this.goodsinfo=re.data.message.goodsinfo;
            this.hotgoodslist=re.data.message.hotgoodslist;
            this.imglist=re.data.message.imglist;
             // 赋值到images中
          this.imglist.forEach((v, i) => {
            this.images.normal_size.push({
              id: v.id,
              url: v.original_path
            });   
          });
        //   console.log(this.images);
        })
        .catch(er=>{

        })
        }
    },
    beforeCreate() {
      
        //  getgoodsInfo()
    },
      created() {
    // console.log("created");
    console.log(this);
    this.getgoodsInfo();
  },
  // 观察属性 属性值改变时自动调用
    watch: {
    // to 新值  from 老值
    $route(to, from) {
      // 对路由变化作出响应...
    //   console.log("我变了");
      //   console.log(to);
      //   console.log(from);
     this.getgoodsInfo();
      //   console.log(this);
    }
  },
       // 注册组件
  components: {
    ProductZoomer
  },
}
    
</script>
<style >
/* 导入字体图标的样式 */
@import url("../../node_modules/font-awesome/css/font-awesome.min.css");
.inline-zoomer-zoomer-box {
  width: 368px;
}
.pic-box .control-box .thumb-list {
  display: flex;
}
.thumb-list img {
  height: 78px;
  width: 78px;
  margin: 5px;
}
.control i {
  text-align: center;
}
#app .ivu-back-top{
    background-color:red;
}
    
</style>