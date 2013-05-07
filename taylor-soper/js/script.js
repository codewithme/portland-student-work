$(document).ready (function () {
	var map = L.map('map').setView([47.606347, -122.332082], 13);
	L.tileLayer('http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png', {
	    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design<\/a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0<\/a>. Data by <a href="http://openstreetmap.org">OpenStreetMap<\/a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA<\/a>.',
	    minZoom: 0,
	    maxZoom: 20
	}).addTo(map);
	
	var startups = [];
	var marker = L.marker([47.606347, -122.332082]).addTo(map);
	$.getJSON('ajax/seattle.json', function(data) {
		
		//console.log(data);
 
   	 data.data.forEach(function(s, i) {
		 var webMarker = L.AwesomeMarkers.icon({ icon: 'signal', color: 'orange'})
		 var mobileMarker = L.AwesomeMarkers.icon({ icon: 'phone', color: 'blue'})
		 var softwareMarker = L.AwesomeMarkers.icon({ icon: 'laptop', color: 'green'})
		 var biotechMarker = L.AwesomeMarkers.icon({ icon: 'beaker', color: 'purple'})
		 
		 var icon = null; 
		 if (s.industry=="web"){
			 icon = webMarker;
		 } else if (s.industry=="mobile"){
			 icon = mobileMarker;
		 } else if (s.industry=="software"){
			 icon = softwareMarker;
		 } else if (s.industry=="biotech"){
 			 icon = biotechMarker;
		 }
		 if (icon != null){
			 var ll = [s.centerLat, s.centerLong];
	   		 var marker = L.marker(ll,{icon: icon}).addTo(map);	
			 var popup = '<p class="name">' + s.startupName + '</p>';
			 popup += '<p> Employee Count: ' + s.employeeCount + '</p>';
			 popup += '<p> Funding Raised: ' + s.totalFundingRaised + '</p>';
			 marker.bindPopup(popup); 
		 }
		
		 
		 //console.log(s);

	  });
	
	});
	
});

