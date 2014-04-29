				var nimbeaux = new google.maps.LatLng(30.187111, -92.011720);
                var zea = new google.maps.LatLng(30.200993, -92.045243);
                var phone = new google.maps.LatLng(30.211718, -92.021452);
                var eddies = new google.maps.LatLng(30.162417, -91.992892);
                var bonefish = new google.maps.LatLng(30.168957, -92.035878);
                var fatpat = new google.maps.LatLng(30.183944, -92.072806);
                
                
                
                
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
                
                var bonefishMarker = new google.maps.Marker({
                	position: bonefish,
                	icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
                });
                
                var fatpatMarker = new google.maps.Marker({
                	position: fatpat,
                	icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
                });
                
                 var cityList = [
                ["<img src=img/nimbeaux.jpg /><h2>Nimbeaux's</h2>"+ "<p>2011 W Pinhook Rd, Lafayette, LA 70508</p>"  + "<a href=map2.html><h2>Go Here</h2></a>", 30.187111, -92.011720, 1, 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'],
                ["Zea's", 30.200993, -92.045243, 2, 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png']
            ];
           

                
                
                
                
                
               var mobileDemo = { 'center': '30.200535, -92.021660', 'zoom': 12 };

                function initialize() {
                	
                	$('#map_canvas').gmap({ 'center': mobileDemo.center, 'zoom': mobileDemo.zoom, 'disableDefaultUI':false });
                    
                    //$('#map_canvas').gmap('addMarker', phoneMarker ).click(function() {
                    //$('#map_canvas').gmap('openInfoWindow', {'content': "My Location"}, this);
                   // });
                    
                    for (var i = 0; i < cityList.length; i++) 
    {
       var $marker = $('#map_canvas').gmap('addMarker', {id: i, 'position': new google.maps.LatLng(cityList[i][1], cityList[i][2]), title: cityList[i][0]});
       $marker.click(function() {
              $('#map_canvas').gmap('openInfoWindow', {'content': cityList[this.id][0]}, this);
       });
    }
                    
					
                    


                }


function hideMarkerById(markerId)
            {
                $('#map_canvas').gmap('find', 'markers', { }, function(marker) {
                    if(marker.id == markerId){marker.setVisible(false);}
                });         
            }


$( document ).on( 'pageshow', '#map-page',function(event){
  initialize();
  	$("#greenBtn").bind("click",function(){
		greenMarkers();
	});

	$("#yellowBtn").bind("click",function(){
		//yellowMarkers();
		hideMarkerById(0);
		
		
	});

	$("#redBtn").bind("click",function(){
		redMarkers();
	});


	$("#allBtn").bind("click",function(){
		greenMarkers();
		yellowMarkers();
		redMarkers();
	});
	
});

function greenMarkers(){
	
	for (var i = 0; i < cityList.length; i++) 
    {
       var $marker = $('#map_canvas').gmap('addMarker', {id: i, 'position': new google.maps.LatLng(cityList[i][1], cityList[i][2]), title: cityList[i][0], icon: cityList[i][3]});
       $marker.click(function() {
              $('#map_canvas').gmap('openInfoWindow', {'content': cityList[this.id][0]}, this);
       });
    }
					
}

function yellowMarkers(){
	
					$('#map_canvas').gmap('addMarker', bonefishMarker ).click(function() {
                    	var bonefishContent = "<h2>BoneFish Grill</h2>" + "<p>1912 Kaliste Saloom Rd, Lafayette, LA 70508</p>" + "<a href=map2.html><h2>Go Here</h2></a>";
                    	localStorage.navTo = "4";
                    $('#map_canvas').gmap('openInfoWindow', {'content': bonefishContent}, this);                    	
                    });
                    
                    
                    
                    
                    //green
                    $('#map_canvas').gmap('addMarker', eddieMarker ).click(function() {
                    	var eddieContent = "<h2>Eddie's BBQ</h2>" + "<p>3439 W Pinhook Rd, Lafayette, LA 70508</p>" + "<a href=map2.html><h2>Go Here</h2></a>";
                    	localStorage.navTo = "3";
                    $('#map_canvas').gmap('openInfoWindow', {'content': eddieContent}, this);                    	
                    });
                    
                    $('#map_canvas').gmap('addMarker', nimMarker ).click(function() {
                    	var nimContent = "<img src=img/nimbeaux.jpg /><h2>Nimbeaux's</h2>"+ "<p>2011 W Pinhook Rd, Lafayette, LA 70508</p>"  + "<a href=map2.html><h2>Go Here</h2></a>";
                    	localStorage.navTo = "2";
                    $('#map_canvas').gmap('openInfoWindow', {'content': nimContent}, this);
                    });
	
}

function redMarkers(){

                    $('#map_canvas').gmap('addMarker', zeaMarker ).click(function() {
                    	var zeaContent = "<h2>Zea's</h2>" + "<p>235 Doucet Rd, Lafayette, LA 70503</p>" + "<a href=map2.html><h2>Go Here</h2></a>";
                    	localStorage.navTo = "1";
                    $('#map_canvas').gmap('openInfoWindow', {'content': zeaContent}, this);                    	
                    });
                    
                    
                    
                    
                    
                    $('#map_canvas').gmap('addMarker', fatpatMarker ).click(function() {
                    	var fatpatContent = "<h2>Fat Pat's Bar and Grill</h2>" + "<p>117 Westmark Blvd, Lafayette, LA 70506</p>" + "<a href=map2.html><h2>Go Here</h2></a>";
                    	localStorage.navTo = "5";
                    $('#map_canvas').gmap('openInfoWindow', {'content': fatpatContent}, this);                    	
                    });
}



