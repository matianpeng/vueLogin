<template>
    <div>
      <div class="header">
        <div class="header-left">
          <img src="./img/Logo.png"/>
        </div>
        <div class="header-right mate-list" @click="toots=!toots">
          <div class="header-right-img">
            <img src="./img/headerImg.png"/>
            <!--<span></span>-->
          </div>
          <div class="header-right-name ">{{username}} </div>
          <ul v-show="toots">
            <li @click="link(0)">后台管理</li>
            <li @click="link(1)">退出</li>
          </ul>
        </div>
      </div>
      <div class="main">
        <div class="content">
          <div class="content-list" v-for="(item,ind) in userMenuList" :key="ind">
            <p class="content-list-title">{{item.menuType}}</p>
            <ul class="content-list-container">
              <li v-for="(child,i) in item.displayMenuPojos" :key="i">
                <a :href="addPath+child.menuUrl" target="_blank">
                  <div class="content-list-container-img">
                    <img :src="addPath+child.menuImg" />
                  </div>
                  <dl>
                    <dt>{{child.title}}</dt>
                    <dd>{{child.desc}}</dd>
                  </dl>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <mate-alert :mateShow="mateShow" :content="alertContent"  @close-dialog="closeDialog"></mate-alert>
    </div>
</template>

<script>
  import ListJs from './list.js'
  export default ListJs

</script>

<style scoped>
@import "list.css";
</style>
