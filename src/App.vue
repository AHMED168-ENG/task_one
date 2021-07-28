<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name : "app",
  components : {
  },
  data : function () {
    return {

    }
  }
}
</script>

<style lang="scss">
#app {
  direction: rtl;
  ul {
    margin:0;
    padding:0;
  }
  a {
    text-decoration:none;
  }
}
</style>
