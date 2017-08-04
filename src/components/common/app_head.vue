<template>
	<div class="header">
		<p>
			<span class="goback" @click="goBack"><<</span>
			header
		</p>
	</div>
</template>
<script>
	export default{
		data(){
			return{
			}
		},
		methods:{
			goBack(){
				this.$router.goBack()
			}
		}
	}
</script>
<style scoped>
	.header{
		width: 100%;
		background:#f5f5f5;
		color: white;
		height: 40px;
		position: relative;
		text-align: center;
		color:#666;
		font-size: 14px;
		line-height: 40px;
	}
	.goback{
		position: absolute;
		left:10px;
	}
</style>