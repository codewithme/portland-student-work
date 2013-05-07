 jQuery(document).ready(function() {

 	// Set variables to track visibility
	jQuery('#wildfire-button').data('visible',true);

	// Handle clicks on disaster types.
	jQuery('#wildfire-button').click(function() {
 		if ( jQuery('#wildfire-button').data('visible') ) {
	 		//if wildfires are visibile, hide them
 			jQuery('#wildfire-button').data('visible',false);
	        jQuery('.fire').fadeOut(1000);            
 		} else {
 			//if wildfires are hidden, show them
	        jQuery('.fire').fadeIn(1000);
	        jQuery('#wildfire-button').data('visible',true);
 		}

    });

 });