$("#add_user").submit(function (event) {
	alert("Data Inserted Successfully! ");
});
$("#update_user").submit(function (event) {
	event.preventDefault();
	let unindexed_array = $(this).serializeArray();

	let data = {};
	$.map(unindexed_array, function (n, i) {});
	console.log(unindexed_array);
});
