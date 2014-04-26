				var nimbeaux = new google.maps.LatLng(30.187111, -92.011720);
                var zea = new google.maps.LatLng(30.200993, -92.045243);
                var phone = new google.maps.LatLng(30.211718, -92.021452);
                var eddies = new google.maps.LatLng(30.162417, -91.992892);
                
                
                
                
                var phoneMarker = new google.maps.Marker({
                	position: phone,
                	icon: 'http://maps.google.com/mapfiles/marker_purple.png'
                	
                });
                
                var zeaMarker = new google.maps.Marker({
                	position: zea,
                	icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
                	
                });
                
                var nimMarker = new google.maps.Marker({
                	position: nimbeaux,
                	icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
                });
                
                var eddieMarker = new google.maps.Marker({
                	position: eddies,
                	icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
                });
                
               var mobileDemo = { 'center': '30.200535, -92.021660', 'zoom': 12 };

                function initialize() {
                	
                	$('#map_canvas').gmap({ 'center': mobileDemo.center, 'zoom': mobileDemo.zoom, 'disableDefaultUI':false });
                    
                    $('#map_canvas').gmap('addMarker', phoneMarker ).click(function() {
                    $('#map_canvas').gmap('openInfoWindow', {'content': "My Location"}, this);
                    });
                    
                    $('#map_canvas').gmap('addMarker', nimMarker ).click(function() {
                    	var nimContent = "<h2>Nimbeaux's</h2>"+ "<p>2011 W Pinhook Rd, Lafayette, LA 70508</p>"  + "<a href=map2.html><h2>Go Here</h2></a>";
                    	localStorage.navTo = "2";
                    $('#map_canvas').gmap('openInfoWindow', {'content': nimContent}, this);
                    });
                    
                    $('#map_canvas').gmap('addMarker', zeaMarker ).click(function() {
                    	var zeaContent = "<h2>Zea's</h2>" + "<p>235 Doucet Rd, Lafayette, LA 70503</p>" + "<a href=map2.html><h2>Go Here</h2></a>";
                    	localStorage.navTo = "1";
                    $('#map_canvas').gmap('openInfoWindow', {'content': zeaContent}, this);                    	
                    });
                    
                    $('#map_canvas').gmap('addMarker', eddieMarker ).click(function() {
                    	var eddieContent = "<h2>Eddie's BBQ</h2>" + "<p>3439 W Pinhook Rd, Lafayette, LA 70508</p>" + "<a href=map2.html><h2>Go Here</h2></a>";
                    	localStorage.navTo = "3";
                    $('#map_canvas').gmap('openInfoWindow', {'content': eddieContent}, this);                    	
                    });
                }




$( document ).on( 'pageshow', '#map-page',function(event){
  initialize();
});

