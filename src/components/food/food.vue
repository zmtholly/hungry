<template>
  <div v-show="showFlag" class="food">

  </div>
</template>

<script type="text/ecmascript-6">
    export default {
      props:{
        food: {
          type:Object
        }
      }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .food
    position fixed
    width 100%
    top 0
    left 0
    bottom 48px
    z-index 30
    background #ffffff
</style>
