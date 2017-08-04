<template>
	<div class="footer">
		<ul>
			<li><router-link to="/list">页面1</router-link></li>
			<li><router-link to="/list">页面2</router-link></li>
			<li><router-link to="/list">页面3</router-link></li>
		</ul>
	</div>
</template>
<script>
	export default {
		data(){
			return{

			}
		}
	}
</script>
<style>
	.footer{
		position: fixed;
		bottom:0;
		height: 40px;
		width: 100%;
		background: #f5f5f5;
		border-top: 1px solid #eee;
		border-radius: 5px;
	}
	.footer ul{
		display: flex;
		width: 100%;
	}
	.footer ul li{
		flex: 1;
		text-align: center;
		line-height: 40px;
	}

</style>