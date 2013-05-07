jQuery(document).ready(function($){
	$.getJSON('js/incidents.json', function(data) {

		var incidentHtml = "";
		var incidentCSS = "<style type='text/css'>";

		for (var i in data.incidents) {
			incidentHtml+=
				"<li id='incident-" + i + "'>" + 
					"<span class='title'>" + data.incidents[i].title + "</span>" + 
					"<span class='location'>" + data.incidents[i].location + "</span>" + 
					"<span class='description'>" + data.incidents[i].description + "</span>" + 
					"<span class='rating'>" + data.incidents[i].rating + "</span>" + 
				"</li>";
			incidentCSS+=
				"#incident-" + i + " {" +
					"top: " + data.incidents[i].top + "px;" +					
					"left: " + data.incidents[i].left + "px;" +
				"}";
		}

		incidentCSS+= "</style>";

		$("head").append(incidentCSS);
        $("#incidents").html(incidentHtml);
	});
});

// "set" the variable's value 
jQuery('#wildfire-button').data('visible',true);

// "get" the variable's value
var test = jQuery('#wildfire-button').data('visible');

jQuery('#wildfire-button').click(function(){
	jQuery(this).data('visible',true);
});
