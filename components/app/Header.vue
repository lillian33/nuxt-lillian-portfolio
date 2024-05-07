<script setup></script>
<template>
	<header class="header container">
		<div class="header-inner">
			<div class="mode-toggler"></div>
			<slot />
		</div>
	</header>
</template>
<style lang="scss" scoped>
.header {
	--uno: "rounded-100 overflow-hidden";
	background-color: rgba($color-white, 0.5);
	backdrop-filter: blur(10px);
	box-shadow: 0 4px 4px 0 rgba($color-black, 0.03);
	border: 1.5px solid $color-white;

	position: sticky;
	top: 43px;

	&-inner {
		--uno: "px-24 py-14";
	}
}
</style>
