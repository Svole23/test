<template>
<div class="app-header">
	<p class="app-header__title">Add User</p>
</div>	
</template>

<script>
export default {
	name: 'app-header'
}
</script>

<style lang="scss" scoped>
.app-header {
	display: flex;
	align-items: center;
	justify-content: center;
	background: #f5f5f0;
	height: 50px;
	width: 100%;
	border-top: 1px solid #c2c2a3;
	border-left: 1px solid #c2c2a3;
	border-right: 1px solid #c2c2a3;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;

	.app-header__title {
		font-weight: bold;
		margin: 0;
	}	
}
</style>