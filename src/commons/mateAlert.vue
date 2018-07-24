<template>
  <div id="diog-model" v-show="mateShow">
    <div id="diog-box">
      <div id="diog-top">
        <div class="title">{{tip}}</div>
        <div class="close"@click="close">×</div>
      </div>
      <div id="diog-content">
        <div class="content">{{content}}</div>
        <div class="buttonbox">
          <input type="button" v-model="button" @click="close">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "mateAlert",
    props: {
      tip: {
        type: String,
        default: "提示"
      },
      content: {
        type: String,
        default: "目前没有权限登录,请联系管理员先进行注册,再登录"
      },
      button: {
        type: String,
        default: "确定"
      },
      mateShow:{
        type: Boolean,
        default: false
      }
    },
    methods: {
      close() {
        this.$emit('close-dialog');
      }
    }
  }
</script>

<style scoped>
  #diog-model {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
  }

  /*弹出窗的盒子*/
  #diog-box {
    width: 490px;
    height: 215px;
    background-color: white;
    margin: 15% auto;
  }

  #diog-top {
    height: 40px;
    background-color: #f5f5f5;
    position: relative;
  }

  .title {
    position: absolute;
    left: 20px;
    font-size: 14px;
    line-height: 40px;
  }

  .close {
    position: absolute;
    right: 20px;
    font-size: 24px;
    /*line-height: 40px;*/
    color: #d5d5d5;
    cursor: pointer;
  }

  .content {
    text-align: center;
    font-size: 14px;
    color: #404040;
    margin: 30px 0;
  }

  .buttonbox {
    text-align: center;
  }
  .buttonbox input {
    width: 130px;
    height: 40px;
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    outline: none;
    background-color: #329ce9;
    border-color: #329ce9;
    color: white;
    font-size: 16px;
    cursor: pointer;
  }
</style>
