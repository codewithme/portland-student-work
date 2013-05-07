 jQuery(document).ready(function() {

 var locations = [
      ['Port of Walla Walla', 'date', 'place', 46.090258,-118.279023, 1],
      ['Walla Walla County Commissioners', 'date', 'place', 46.06546,-118.344254, 2],
      ['Walla Walla City Council', 'date', 'place', 46.067008,-118.341722, 3],
      ['City of College Place', 'date', 'place', 46.043212,-118.387213, 4],
      ['Walla Walla School Board', 'date', 'place', 46.065445,-118.328826, 5],
	  ['Touchet School Board', 'date', 'place', 46.043227,-118.670068, 6],
	  ['College Place School Board', 'date', 'place', 46.031132,-118.388672, 7],
	  ['Dixie School Board', 'date', 'place', 46.142318,-118.149269, 8],
	  ['Waitsburg School Board', 'date', 'place', 46.266691,-118.154933, 9],
	  ['Prescott School Board', 'date', 'place', 46.297329,-118.319235, 10],
	  ['Burbank School Board', 'date', 'place', 46.201221,-119.015515, 11],
	  ['Waitsburg City Council', 'date', 'place', 46.270726,-118.154569, 12]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: new google.maps.LatLng(46.138928,-118.374252),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][3], locations[i][4]),
        map: map
      });
	
	google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
		return function() {
		changeinfo(i);
		}
		})(marker, i));
	google.maps.event.addListener(marker, 'mouseout', (function(marker, i) {
		return function() {
		 var state = jQuery("#currentstate").text();
		 console.log(state);
		 if (state !="") {
			 changeinfo(state-1);
			} 
			else {
				 var html3 = '<h1>Latest Meetings</h1><p id="explanation">Click a specific government body on the map above to display a list of their latest meetings.</p>';
		 jQuery("div#info").html(html3);
		 }
		
		}
		})(marker, i));
		  
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
		var html = '<h3 style="font-family:Helvetica; margin-bottom:0px;line-height:15px;">'+locations[i][0]+'</h3><br/><p style="font-family:Helvetica;margin-top:0px;"><strong>Meeting</strong>: '+locations[i][1]+'<br/><strong>Location</strong>: '+ locations[i][2] + '</p>';
          infowindow.setContent(html);
          infowindow.open(map, marker);
		  changeinfo(i);
			jQuery('#feed').load('feeds/feed-'+locations[i][5]+'.html');
			jQuery('#currentstate').html(locations[i][5]);
		}})(marker, i));
	  }/**close for**/

	 
	 
	 function changeinfo(n) {
		var html = '<h1>'+locations[n][0]+'</h1></br><h2>Latest Meetings</h2>';
		jQuery("div#info").html(html);	
		
		}
		/*build function for displaying "click on map to display meetings as default*/
	
		
	 });