<template>
	<div class="templ">
		<!-- 向下传值 -->
		<app-head></app-head>
		<p>首页首页</p>
		<app-footer></app-footer>
	</div>
</template>
<script>
	import appHead from '../common/app_head.vue'
	import appFooter from '../common/app_footer.vue'
	export default{
		data(){
			return{
				name: 'home'
			}
		},
		components:{
			appHead,
			appFooter
		}
	}
</script>
<style scoped>
	.templ{
		width: 100%;
		height: 100%;
	}
</style>