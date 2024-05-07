<script setup lang="ts">
const props = defineProps<{
	name: string;
}>();
</script>
<template>
	<div class="svg-icon">
		<span :class="`i-custom:${props.name}`"></span>
	</div>
</template>
<style lang="scss" scoped>
.svg-icon {
}
</style>
