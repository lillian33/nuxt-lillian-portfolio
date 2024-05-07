<script setup></script>
<template>
	<nav class="nav">
		<ul class="nav-list">
			<li class="nav-item">
				<NuxtLink to="/">Project</NuxtLink>
			</li>
			<li class="nav-item">
				<NuxtLink to="/">About</NuxtLink>
			</li>
			<li class="nav-item">
				<NuxtLink to="/">Resume</NuxtLink>
			</li>
			<li class="nav-item">
				<NuxtLink to="/">Contact</NuxtLink>
			</li>
		</ul>
	</nav>
</template>
<style lang="scss" scoped>
.nav-list {
	--uno: "ul-list flex gap-44";
}
</style>
