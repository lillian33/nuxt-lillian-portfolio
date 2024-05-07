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
	border: 1px solid $color-white;

	position: sticky;
	top: 43px;

	&-inner {
		--uno: "px-24 py-14 ";
	}
}
</style>
