<script setup></script>
<template>
	<div class="layout--default">
		<AppHeader>
			<AppNav />
		</AppHeader>

		<main class="page-main">
			<slot />
		</main>

		<AppFooter />
	</div>
</template>
<style lang="scss" scoped>
.page-main {
	--uno: "mt-115 mb-64";
}
</style>
