// Eorzea Time
// Thanks for figuring this out http://jsfiddle.net/jryansc/6r85j/
var E_TIME = 20.5714285714;
var global = {
  utcTime: null,
  eorzeaTime: null
};

window.setInterval(updateClock, Math.floor(1000 * 60 /  E_TIME));

function updateClock() {
    global.utcTime = new Date().getTime();
    var eo_timestamp = Math.floor(global.utcTime * E_TIME);
    global.eorzeaTime = new Date();
    global.eorzeaTime.setTime(eo_timestamp);
    showTime();
}

function showTime() {
    var d = new Date();
    d.setTime(global.eorzeaTime);
    var eTime = document.getElementById('e-time');
    var hours = d.getUTCHours();
    var ampm = hours > 11 ? "PM" : "AM";
    if(hours > 12)
        hours -= 12;
    hours = padLeft(hours);
    var minutes = d.getUTCMinutes();
    minutes = padLeft(minutes);
    eTime.innerHTML = hours + ":" + minutes + " " + ampm;
}

function padLeft(val){
    var str = "" + val;
    var pad = "00";
    return pad.substring(0, pad.length - str.length) + str;
}

updateClock();

/* Abstraction function for AJAX call and template compilation */
function populateTemplateTable(jsonFile, templateId, containerId) {
  $.getJSON(jsonFile, function(data) {
	var templateData = {rows: data};
	var templateHtml = $('#' + templateId + '').html();
	var template = Handlebars.compile(templateHtml);
	var compiledTemplate = template(templateData);
	$('#' + containerId + '').replaceWith(compiledTemplate);
	$('#' + containerId + '').tablesorter({
		headers: {
			3: {sorter:false}
		}
	});
  });
}

/* Slide Bar and Filtering for Tables */
/*Mining*/

function outputMineUpdate(minelvl) {
  document.querySelector('#mngatherlvl').value = minelvl;
}

var $MiningRows = $('#minebottable tbody tr');
$('#minelvl').on('change', function(event) {
	var curVal = this.value;
	$('.M').hide("slow");
	$('.M').filter(function() {
		return $('td:nth-child(7)', this).last().html() <= curVal;
	}).show("slow");
});

/*Botany*/

function outputBotUpdate(botlvl) {
  document.querySelector('#btgatherlvl').value = botlvl;
}

var $BotanyRows = $('#minebottable tbody tr');
$('#botlvl').on('change', function(event) {
	var curVal = this.value;
	$('.B').fadeOut("slow");
	$('.B').filter(function() {
		return $('td:nth-child(7)', this).last().html() <= curVal;
	}).show("slow");
});

/*Fishing*/
function outputUpdate(fshlvl) {
  document.querySelector('#fshgatherlvl').value = fshlvl;
}

var $fishingRows = $('#fishinglist tbody tr');
$('#fshlvl').on('change', function(event) {
	var curVal = this.value;
	$('.F').fadeOut("slow");
	$('.F').filter(function() {
		return $('td', this).last().html() <= curVal;
	}).show("slow");
});

/*Show or Hide Mining*/
$('#Mining').change(function () {
    if (!this.checked) $('.M, .mslide').fadeOut('slow');
    else $('.M, .mslide').fadeIn('slow');
});

/*Show or Hide Botany*/
$('#Botany').change(function () {
    if (!this.checked) $('.B, .bslide').fadeOut('slow');
    else $('.B, .bslide').fadeIn('slow');
});

/*Show or Hide Mooching*/
$('#Mooch').change(function () {
    if (!this.checked) $('.MCH').fadeOut('slow');
    else $('.MCH').fadeIn('slow');
});


/* The Following Hides or Shows the Nodes based on Weather*/

$('#WeatherTable').change(function () {
  if (!this.checked) $('.weatherselector').fadeOut('slow');
    else $('.weatherselector').fadeIn('slow');
  });

$('#Any').change(function () {
  if (!this.checked) $('.Any').fadeOut('slow');
    else $('.Any').fadeIn('slow');
  });

$('#Blizzard').change(function () {
  if (!this.checked) $('.BLizzard').fadeOut('slow');
    else $('.Blizzard').fadeIn('slow');
  });

$('#Clear').change(function () {
  if (!this.checked) $('.Clear').fadeOut('slow');
    else $('.Clear').fadeIn('slow');
  });

$('#Cloudy').change(function () {
  if (!this.checked) $('.Cloudy').fadeOut('slow');
    else $('.Cloudy').fadeIn('slow');
  });

$('#Duststorm').change(function () {
  if (!this.checked) $('.Duststorm').fadeOut('slow');
    else $('.Duststorm').fadeIn('slow');
  });

$('#Fair').change(function () {
  if (!this.checked) $('.Fair').fadeOut('slow');
    else $('.Fair').fadeIn('slow');
  });

$('#Fog').change(function () {
  if (!this.checked) $('.Fog').fadeOut('slow');
    else $('.Fog').fadeIn('slow');
  });

$('#Gale').change(function () {
  if (!this.checked) $('.Gale').fadeOut('slow');
    else $('.Gale').fadeIn('slow');
  });

$('#Gloom').change(function () {
  if (!this.checked) $('.Gloom').fadeOut('slow');
    else $('.Gloom').fadeIn('slow');
  });

$('#Heatwave').change(function () {
  if (!this.checked) $('.Heatwave').fadeOut('slow');
    else $('.Heatwave').fadeIn('slow');
  });

$('#Lightning').change(function () {
  if (!this.checked) $('.Lightning').fadeOut('slow');
    else $('.Lightning').fadeIn('slow');
  });

$('#Overcast').change(function () {
  if (!this.checked) $('.Overcast').fadeOut('slow');
    else $('.Overcast').fadeIn('slow');
  });

$('#Rain').change(function () {
  if (!this.checked) $('.Rain').fadeOut('slow');
    else $('.Rain').fadeIn('slow');
  });

$('#Thunderstorm').change(function () {
  if (!this.checked) $('.Thunderstorm').fadeOut('slow');
    else $('.Thunderstorm').fadeIn('slow');
  });

$('#Windy').change(function () {
  if (!this.checked) $('.Windy').fadeOut('slow');
    else $('.Windy').fadeIn('slow');
});
