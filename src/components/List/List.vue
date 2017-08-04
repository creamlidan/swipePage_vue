<template>
	<div class="listTempl">
	<app-head></app-head>
		<p>这是一个list</p>
		<router-link to="/list/info">查看详情</router-link>
	</div>
</template>
<script>
	import appHead from '../common/app_head.vue'
	export default {
		data(){
			return{
				name: 'list'
			}
		},
		components:{
			appHead
		}
	}
</script>
<style>
	.listTempl{
		width: 100%;
		height: 100%;
	}
</style>