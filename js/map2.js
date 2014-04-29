 				var map2,
                currentPosition,
                directionsDisplay, 
                directionsService,
                destinationLatitude,
                destinationLongitude;
                var zeaCor = [30.200993, -92.045243];
                var phone = new google.maps.LatLng(30.211718, -92.021452);
                var nimCor = [30.187111, -92.011720];
                var eddieCor = [30.162417, -91.992892];
                var bonefishCor = [30.168957, -92.035878];
                var fatpatCor = [30.183944, -92.072806];

            function initializeMapAndCalculateRoute(lat, lon)
            {
                directionsDisplay = new google.maps.DirectionsRenderer(); 
                directionsService = new google.maps.DirectionsService();
                destinationLatitude = lat;
                destinationLongitude = lon;

                currentPosition = phone;

                map2 = new google.maps.Map(document.getElementById('map_canvas2'), {
                   zoom: 15,
                   center: currentPosition,
                   mapTypeId: google.maps.MapTypeId.ROADMAP
                 });

                directionsDisplay.setMap(map2);

                

                // current position marker info
                /*
                var infowindow = new google.maps.InfoWindow();
                google.maps.event.addListener(currentPositionMarker, 'click', function() {
                    infowindow.setContent("Current position: latitude: " + lat +" longitude: " + lon);
                    infowindow.open(map, currentPositionMarker);
                });
                */

                // calculate Route
               // google.maps.event.trigger(map2, 'resize');
                calculateRoute();
            }

           

            function calculateRoute() {

                var targetDestination =  new google.maps.LatLng(destinationLatitude, destinationLongitude);
                if (currentPosition != '' && targetDestination != '') {

                    var request = {
                        origin: currentPosition, 
                        destination: targetDestination,
                        travelMode: google.maps.DirectionsTravelMode["DRIVING"]
                    };

                    directionsService.route(request, function(response, status) {
                        if (status == google.maps.DirectionsStatus.OK) {
                            directionsDisplay.setPanel(document.getElementById("directions"));
                            directionsDisplay.setDirections(response); 

                            /*
                                var myRoute = response.routes[0].legs[0];
                                for (var i = 0; i < myRoute.steps.length; i++) {
                                    alert(myRoute.steps[i].instructions);
                                }
                            */
                            $("#results").show();
                        }
                        else {
                            $("#results").hide();
                        }
                    });
                }
                else {
                    $("#results").hide();
                }
            }
                
                
                
                $(document).on("pageshow", "#page_two", function() {
                	var navigateTo = localStorage.navTo;
                	
                    if(localStorage.navTo === "1")
                    	initializeMapAndCalculateRoute(zeaCor[0], zeaCor[1]);
                    else if(localStorage.navTo === "2")
                    	initializeMapAndCalculateRoute(nimCor[0], nimCor[1]);
                    else if(localStorage.navTo === "3")
                    	initializeMapAndCalculateRoute(eddieCor[0], eddieCor[1]);
                   	else if(localStorage.navTo === "4")
                    	initializeMapAndCalculateRoute(bonefishCor[0], bonefishCor[1]);
                    else if(localStorage.navTo === "5")
                    	initializeMapAndCalculateRoute(fatpatCor[0], fatpatCor[1]);
                   
                });