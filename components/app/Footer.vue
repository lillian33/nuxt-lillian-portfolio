<script setup lang="ts">
const copyrightData = ref({
	author: "Lillian Lin",
	year: new Date().getFullYear(),
});

const contactList = ref([
	{
		name: "Gmail",
		link: "mailto:lillian.lin33@gmail.com",
		target: "_blank",
	},
	{
		name: "Notion",
		link: "/",
		target: "_blank",
	},
]);
</script>
<template>
	<footer class="footer container">
		<div class="footer-inner">
			<p class="copyright">
				© {{ copyrightData.author }} {{ copyrightData.year }} Copyright. All
				Rights Reserved.
			</p>
			<ul class="contact-list">
				<li v-for="item in contactList" class="item">
					<a :href="item.link" :target="item.target" class="item-link">{{
						item.name
					}}</a>
				</li>
			</ul>
		</div>
	</footer>
</template>
<style lang="scss" scoped>
.footer {
	--uno: "pos-relative container";

	&:before {
		position: absolute;
		content: "";
		top: 0;
		width: 100%;
		height: 1px;
		background-color: $line-color--light;
		z-index: 1;
	}

	&-inner {
		--uno: "pt-32 pb-68 flex";
	}

	.copyright {
		--uno: "text-14 m-0 ";
	}

	.contact-list {
		--uno: "ul-list flex gap-32 ml-auto mr-0";
	}
}
</style>
