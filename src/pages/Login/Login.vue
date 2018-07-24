<template>
  <div id="pages">
    <div id="login">
      <main>
        <section>
          <img id="logo" src="./img/logo.png" alt="logo">
          <p class="introduce">
            专注为国际时尚品牌提供整合线上线下全渠道的品牌咨询、
            整合营销、店铺运营、仓储物流和IT解决方案等全链路服务。
          </p>
        </section>
        <aside>
          <div id="login-panel">
            <div class="title">
              <div>{{status?ttip:mtip}}</div>
              <div class="massges" @click="status=!status">
                <div class="massge">
                  {{status?mtip:ttip}}
                </div>
                <img v-show="status" width="42" src="./img/password.png" alt="">
                <img v-show="!status" src="./img/QRcode.png" alt="">
              </div>
            </div>
            <!--<div v-show="status" id="code">-->
              <!--<div id="wxcode">-->
              <!--</div>-->
              <!--<div class="tip">-->
                <!--打开 <span class="tip-color">微信</span>扫一扫登录-->
              <!--</div>-->
            <!--</div>-->
            <div>
              <div class="viptip">
                请使用百秋BI账号登录
              </div>
              <div class="inputbox">
                <input type="text" v-model="form.username" placeholder="用户名">
              </div>
              <div class="inputbox">
                <input type="password"  @keyup.enter="login" v-model="form.password" placeholder="登录密码">
              </div>
              <div class="buttonbox">
                <input type="button"  @click.stop="login" value="登录">
              </div>
              <!--<div class="foget">-->
                <!--忘记密码-->
              <!--</div>-->
              <!--<div class="otherLogin">-->
                <!--其他登录方式：-->
              <!--</div>-->
            </div>
          </div>
        </aside>
      </main>
      <footer>
        <div class="herf">
          <a href="http://www.ibaiqiu.com/guanyubaiiqiu.html">关于百秋</a><span>|</span>
          <a href="http://www.ibaiqiu.com/lianxiwomen.html ">联系我们</a><span>|</span>
          <a href="http://www.ibaiqiu.com/">百秋官网</a>
        </div>
        <hr>
        <div>
          &copy;2011-2018&nbsp;百秋版权所有
        </div>
      </footer>
    </div>
    <mate-alert :mateShow="mateShow" :content="alertContent"  @close-dialog="closeDialog"></mate-alert>
  </div>
</template>

<script>
  import "./css/login.css"
  import MateAlert from "../../commons/mateAlert";
  import API from "@/configs/"
  export default {
    name: "Login",
    components: {MateAlert},
    data() {
      return {
        addPath:API.base+"/",
        mtip: "看板登录",
        ttip: "后台登录",
        status: false,
        form: {
          username: "",
          password: ""
        },
        mateShow:false,
        alertContent:""
      }
    }
    , mounted() {
      // this.wx()
    }

    ,
    methods: {
      //微信二维码生成
      // wx() {
      //   var uri = encodeURIComponent("https://mp.ibaiqiu.com")
      //   var obj = new WxLogin({
      //     self_redirect: true,
      //     id: "wxcode",
      //     appid: "wxbdebc8ece7c9b4fd",
      //     scope: "snsapi_login",
      //     redirect_uri: uri,
      //     state: "adfafdafdf",
      //     style: "",
      //     href: "https://mp.ibaiqiu.com/wxcode.css"
      //   });
      // },
      closeDialog(){
        this.mateShow=false;
      },
      //登陆函数
      login() {
        console.log(this.status)
        let _this = this
        if (this.form.username && this.form.password) {
          api.login(this.form).then(function (res) {
            if(res.data.code === 0){
              if(_this.status) {
                //status为true登录后台
                window.location.href=API.base+"/index.html"
              }else {
                //status为false登录列表页
                window.sessionStorage.setItem('username',_this.form.username)
                _this.$router.push({path:'/list'})
              }
            }else{
              _this.mateShow=true;
              _this.alertContent=res.data.msg
            }
          })
        } else {
          this.mateShow=true;
          this.alertContent="请输入用户名和密码"
        }
      }
    },




  }
</script>
