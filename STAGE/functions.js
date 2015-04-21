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

// /*Build out Fishing Table from fishing.json*/
 $.getJSON('fishing.json', function(data) {
 	var templateData = {fishes: data};
 	var templateHtml = $('#fishingTable').html();
 	var template = Handlebars.compile(templateHtml);
 	var compiledTemplate = template(templateData);
 	$('#fishinglist').replaceWith(compiledTemplate);
 	// $('#fishing-container').html(compiledTemplate);

 	/*Now add sortable table headers*/
 	/*Needs to run in this script or will not read table to make sortable*/
 	$("#fishinglist")
 	.tablesorter({
 		headers: {
 			3: {sorter:false}
 		}

 	});

 });

/*Build out UnspoiledNodes Table from botmin.json*/
$.getJSON('botmin.json', function(data) {
	var templateData = {nodes: data};
	var templateHtml = $('#nodesTable').html();
	var template = Handlebars.compile(templateHtml);
	var compiledTemplate = template(templateData);
	$('#unspoilednodeslist').replaceWith(compiledTemplate);
	//$('#fishing-container').html(compiledTemplate);

	/*Now add sortable table headers*/
	/*Needs to run in this script or will not read table to make sortable*/
	$("#unspoilednodeslist")
	.tablesorter({
		headers: {
			2: {sorter:false}
		}
	});

});

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
    else {
        $('.M').filter(function() {
		    return $('td:nth-child(7)', this).last().html() <= $('#minelvl').val();
     }).fadeIn('slow');
        $('.mslide').fadeIn('slow');
  }
});

/*Show or Hide Botany*/
$('#Botany').change(function () {
    if (!this.checked) $('.B, .bslide').fadeOut('slow');
    else {
        $('.B').filter(function() {
		    return $('td:nth-child(7)', this).last().html() <= $('#botlvl').val();
     }).fadeIn('slow');
        $('.bslide').fadeIn('slow');
  }
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
    else {
        $('.Any').filter(function() {
          return $('td', this).last().html() <= $('#fshlvl').val();
     }).fadeIn('slow');
  }
});

$('#Blizzard').change(function () {
    if (!this.checked) $('.Blizzard').fadeOut('slow');
    else {
        $('.Blizzard').filter(function() {
          return $('td', this).last().html() <= $('#fshlvl').val();
     }).fadeIn('slow');
  }
});

$('#Clear').change(function () {
    if (!this.checked) $('.Clear').fadeOut('slow');
    else {
        $('.Clear').filter(function() {
          return $('td', this).last().html() <= $('#fshlvl').val();
     }).fadeIn('slow');
  }
});

$('#Cloudy').change(function () {
    if (!this.checked) $('.Cloudy').fadeOut('slow');
    else {
        $('.Cloudy').filter(function() {
          return $('td', this).last().html() <= $('#fshlvl').val();
     }).fadeIn('slow');
  }
});

$('#Duststorm').change(function () {
    if (!this.checked) $('.Duststorm').fadeOut('slow');
    else {
        $('.Duststorm').filter(function() {
          return $('td', this).last().html() <= $('#fshlvl').val();
     }).fadeIn('slow');
  }
});

$('#Fair').change(function () {
    if (!this.checked) $('.Fair').fadeOut('slow');
    else {
        $('.Fair').filter(function() {
          return $('td', this).last().html() <= $('#fshlvl').val();
     }).fadeIn('slow');
  }
});


$('#Fog').change(function () {
    if (!this.checked) $('.Fog').fadeOut('slow');
    else {
        $('.Fog').filter(function() {
          return $('td', this).last().html() <= $('#fshlvl').val();
     }).fadeIn('slow');
  }
});


$('#Gale').change(function () {
    if (!this.checked) $('.Gale').fadeOut('slow');
    else {
        $('.Gale').filter(function() {
          return $('td', this).last().html() <= $('#fshlvl').val();
     }).fadeIn('slow');
  }
});


$('#Gloom').change(function () {
    if (!this.checked) $('.Gloom').fadeOut('slow');
    else {
        $('.Gloom').filter(function() {
          return $('td', this).last().html() <= $('#fshlvl').val();
     }).fadeIn('slow');
  }
});

$('#Heatwave').change(function () {
    if (!this.checked) $('.Heatwave').fadeOut('slow');
    else {
        $('.Heatwave').filter(function() {
          return $('td', this).last().html() <= $('#fshlvl').val();
     }).fadeIn('slow');
  }
});

$('#Lightning').change(function () {
    if (!this.checked) $('.Lightning').fadeOut('slow');
    else {
        $('.Lightning').filter(function() {
          return $('td', this).last().html() <= $('#fshlvl').val();
     }).fadeIn('slow');
  }
});

$('#Overcast').change(function () {
    if (!this.checked) $('.Overcast').fadeOut('slow');
    else {
        $('.Overcast').filter(function() {
          return $('td', this).last().html() <= $('#fshlvl').val();
     }).fadeIn('slow');
  }
});

$('#Rain').change(function () {
    if (!this.checked) $('.Rain').fadeOut('slow');
    else {
        $('.Rain').filter(function() {
          return $('td', this).last().html() <= $('#fshlvl').val();
     }).fadeIn('slow');
  }
});

$('#Thunderstorm').change(function () {
    if (!this.checked) $('.Thunderstorm').fadeOut('slow');
    else {
        $('.Thunderstorm').filter(function() {
          return $('td', this).last().html() <= $('#fshlvl').val();
     }).fadeIn('slow');
  }
});

$('#Windy').change(function () {
    if (!this.checked) $('.Windy').fadeOut('slow');
    else {
        $('.Windy').filter(function() {
          return $('td', this).last().html() <= $('#fshlvl').val();
     }).fadeIn('slow');
  }
});

/*tooltip Follows Cursor*/
var tooltip = document.querySelectorAll('.tooltip');

document.addEventListener('mousemove', fn, false);

function fn(e) {
    for (var i=tooltip.length; i--;) {
        tooltip[i].style.left = e.pageX + 'px';
        tooltip[i].style.top = e.pageY + 'px';
    }
}
