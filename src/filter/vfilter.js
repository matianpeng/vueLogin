// import Vue from "vue/types/index";
const vfilter={
  number:function (value) {
    if(!value) return;
    if (value.length>10){
      value=value.substring(0,10)+'...'
    }
    return value
  }
}
export default vfilter;
