<template>
	<div class="app">
		<router-view></router-view>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				name: 'app',
			}
		}
	}
</script>
<style>
body{height: 1000px;}
*{margin:0;padding:0;}
.child-view {
	position: absolute;
	width:100%;
	transition: all 10s cubic-bezier(.55,0,.1,1);
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