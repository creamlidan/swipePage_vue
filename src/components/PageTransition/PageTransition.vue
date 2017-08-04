<template>
  <transition :name="transitionName">
	 <router-view class="child-view"></router-view>
  </transition>
</template>

<script>
  export default {
    data () {
      return {
        transitionName: 'slide-left',
        touch:{offset:0,startX:0},
      }
    },
    beforeRouteUpdate (to, from, next) {
      let isBack = this.$router.isBack
      let offset = this.touch.offset
      if (isBack || offset > 5) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
      this.$router.isBack = false
      next()
    },
    methods:{
      startHander(e){
        let startX = e.targetTouches[0].clientX;
        this.touch.startX = startX;
      },
      moveHander(e){
        this.touch.offset = e.targetTouches[0].clientX - this.touch.startX;
      },
      endHander(e){
        if(this.touch.offset>0){
          this.$router.goBack();
        }
        
      }
    },
    mounted(){
      window.addEventListener("touchstart",this.startHander)
      window.addEventListener("touchmove",this.moveHander)
      window.addEventListener("touchend",this.endHander)
    },
  }
</script>

<style scoped>
  .child-view {
  	position: absolute;
  	width:100%;
  	transition: all .8s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(50px, 0);
    transform: translate(50px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-50px, 0);
    transform: translate(-50px, 0);
  }
  .header {
    position:absolute;
    height:44px;
    background:#0058f1;
    width:100%
  }
</style>
