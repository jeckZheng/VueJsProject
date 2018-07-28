<template>
  <div id="app">
    <!--顶部-->
    <!-- 顶部通栏 -->
    <div class="header">
      <!-- 1.0 导航栏头部 -->
      <div class="head-top">
        <div class="section">
          <div class="left-box">
            <span>黑马买买买</span>
            <a target="_blank" href="#"></a>
            <a target="_blank" href="#"></a>
          </div>
          <div id="menu" class="right-box">
            <span style="display: none;">
              <a href="" class="">登录</a>
              <strong>|</strong>
              <a href="" class="">注册</a>
              <strong>|</strong>
            </span>
            <span>
              <router-link to="/member">会员中心</router-link>
              <strong>|</strong>
              <a>退出</a>
              <strong>|</strong>
            </span>
            <router-link to="/car">
              <i class="iconfont icon-cart"></i>购物车(
              <span id="shoppingCartCount">
                <span>4</span>
              </span>)</router-link>
          </div>
        </div>
      </div>

      <!-- 2.0 导航条 -->
      <div class="head-nav">
        <div class="section">
          <div id="menu2" class="nav-box menuhd">
            <ul>
              <li class="index">
                <router-link to="/index">
                  <span class="out" style="top: 0px;">首页</span>
                </router-link>
              </li>
              <li class="news">
                <router-link to="/">
                  <span class="out" style="top: 0px;">每日精选</span>
                </router-link>
              </li>
              <li class="photo">
                <a href="#" class="">
                  <span class="out" style="top: 0px;">秒杀专区</span>
                </a>
              </li>
              <li class="video">
                <a href="#" class="">
                  <span class="out" style="top: 0px;">黑马超市</span>
                </a>
              </li>
              <li class="down">
                <a href="#" class="">
                  <span class="out" style="top: 0px;">会员权益</span>
                </a>
              </li>
              <li class="goods" >
                <a href="" class="router-link-exact-active ">
                  <span class="out" style="top: 0px;">购物商城</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="search-box">
            <div class="input-box">
              <input id="keywords" name="keywords" type="text" onkeydown="if(event.keyCode==13){};" placeholder="输入关健字" x-webkit-speech="">
            </div>
            <a href="javascript:;">
              <i class="iconfont icon-search"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- 路由的出口 -->
    <router-view></router-view>
    <!--底部-->
    <div data-v-7ba5bd90="" class="footer">
      <div data-v-7ba5bd90="" class="section">
        <div data-v-7ba5bd90="" class="foot-nav">
          <a data-v-7ba5bd90="" href="">关于我们</a>
          <strong data-v-7ba5bd90="">|</strong>
          <a data-v-7ba5bd90="" href="">联系我们</a>
          <strong data-v-7ba5bd90="">|</strong>
          <a data-v-7ba5bd90="" href="">联系客服</a>
          <strong data-v-7ba5bd90="">|</strong>
          <a data-v-7ba5bd90="" href="">合作招商</a>
          <strong data-v-7ba5bd90="">|</strong>
          <a data-v-7ba5bd90="" href="">商家帮助</a>
          <strong data-v-7ba5bd90="">|</strong>
          <a data-v-7ba5bd90="" href="">营销中心</a>
          <strong data-v-7ba5bd90="">|</strong>
          <a data-v-7ba5bd90="" href="">隐私政策</a>
        </div>
        <div data-v-7ba5bd90="" class="foot-box">
          <div data-v-7ba5bd90="" class="copyright">
            <p data-v-7ba5bd90="">版权所有 黑马买买买 </p>
            <p data-v-7ba5bd90="">公司地址： 联系电话：</p>
            <p data-v-7ba5bd90="" class="gray">Copyright © 2009-2018 itcast Corporation,All Rights Reserved.</p>
          </div>
          <div data-v-7ba5bd90="" class="service">
            <p data-v-7ba5bd90="">周一至周日 9:00-24:00</p>
            <a data-v-7ba5bd90="" href="#">
              <i data-v-7ba5bd90="" class="iconfont icon-phone"></i>在线客服</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//yingrujquery
import $ from "jquery"
  export default {
      name:"app",
    mounted:()=>{
      	$("#menu2 li a").wrapInner( '<span class="out"></span>' );
	$("#menu2 li a").each(function() {
		$( '<span class="over">' +  $(this).text() + '</span>' ).appendTo( this );
	});

	$("#menu2 li a").hover(function() {
		$(".out",	this).stop().animate({'top':	'48px'},	300); // move down - hide
		$(".over",	this).stop().animate({'top':	'0px'},		300); // move down - show

	}, function() {
		$(".out",	this).stop().animate({'top':	'0px'},		300); // move up - show
		$(".over",	this).stop().animate({'top':	'-48px'},	300); // move up - hide
	});
    }
  }
    
</script>

<style>
  @import url('./assets/hover/css/style.css')
</style>