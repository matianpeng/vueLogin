<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  export default {
    name: 'App'
  }
</script>

<style>
  body, #app {
    /*overflow: hidden;*/
    margin: 0;
    padding: 0;
  }
  *{
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  ul,li{
    list-style: none;
  }
</style>
