<script setup></script>
<template>
	<nav class="nav">
		<ul class="nav-list">
			<li class="nav-item">
				<NuxtLink :to="{ name: 'project' }">Project</NuxtLink>
			</li>
			<li class="nav-item">
				<NuxtLink :to="{ name: 'about' }">About</NuxtLink>
			</li>
			<li class="nav-item">
				<NuxtLink :to="{ name: 'resume' }">Resume</NuxtLink>
			</li>
			<li class="nav-item">
				<NuxtLink :to="{ name: 'contact' }">Contact</NuxtLink>
			</li>
		</ul>
	</nav>
</template>
<style lang="scss" scoped>
.nav-list {
	--uno: "ul-list flex gap-44";
}
</style>
