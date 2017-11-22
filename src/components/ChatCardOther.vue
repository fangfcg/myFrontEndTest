<template>
<div class="other-wrap">
  <span class="-header" :style="{'background-color':color}">{{name}}</span>
  <div class="-msg">{{msg}}</div>
</div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
    }
  },
  ready () {
    this.$el.scrollIntoView()
  },
  props: ['msg', 'name', 'color']
}
</script>

<style lang='less'>
.other-wrap{
  /*background-color: #666;*/
  padding: 5px 5px 0 5px;
  position: relative;
  .-header{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #905;
    height:50px;
    width: 50px;
    border-radius: 50%;
    font-weight: bolder;
  }
  .-name{
    /*background-color: #fff;*/
    position: absolute;
    font-size: 14px;
    padding: 2px;
    margin: 0 10px;
    color: #999;
  }
  .-msg{
    /*display: inline-flex;*/
    background-color: #fff;
    padding: 10px;
    position: relative;
    left: 60px;
    top: -40px;
    border-radius: 6px;
    //max-width: ~'calc(100% - 180px)';
    font-size: 16px;
    width: fit-content;
    width:-webkit-fit-content;
    width:-moz-fit-content;
    max-width: 200px;
    word-wrap: break-word;
  }
}
</style>