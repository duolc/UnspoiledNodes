$.getJSON('fishing.json', function(data) {
	var templateData = {fishes: data};
	var templateHtml = $('#fishingTable').html();
	var template = Handlebars.compile(templateHtml);
	var compiledTemplate = template(templateData);
	$('#fishinglist').replaceWith(compiledTemplate);
	//$('#fishing-container').html(compiledTemplate);
	//Now sort new table

});
