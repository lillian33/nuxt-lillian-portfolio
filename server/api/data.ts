export default defineEventHandler((event) => {
	return {
		data: {
			author: "Lillian Lin",
			year: new Date().getFullYear(),
		},
	};
});
