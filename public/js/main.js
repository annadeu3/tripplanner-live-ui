$(document).ready(function() {
  var drawLocation = initialize_gmaps();

  $('#hotelbutton').on('click', function(){
  	if ($('ul#hotellist>div').length > 0) {
  		console.log("Too many hotels!");
  	}
      else {
      	var $selectedhotel = $('#hotelselect option:selected').text();
      $('<div class="itinerary-item"><span class="title">'+$selectedhotel+'</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>').appendTo('#hotellist');
	  	   // console.log("selected hotel is ",$selectedhotel);
	      
	      for(var i = 0; i < hotels.length; i++) {
	      	// console.log("current hotel name", hotels[i].name)
	      	
	      	if(hotels[i].name == $selectedhotel) {
	      		// console.log("matching hotel",hotels[i]);
	      		for (var key in hotels[i].place[0]) {
	      			var hotelLocation = hotels[i].place[0].location; // array
	      			// console.log("location is",hotelLocation);
	      		}
	      		break;
	      	}
	      }

	   	  drawLocation(hotelLocation, {icon: '../images/hotel-bed.jpg'});
  	   }
   });

   $('#restaurantbutton').on('click', function(){
   		if ($('ul#restaurantlist>div').length > 2) {
  		console.log("Too many restaurants!");
  		}
      else {
        var $selectedrestaurant = $('#restaurantselect option:selected').text();
        $('<div class="itinerary-item"><span class="title">'+$selectedrestaurant+'</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>').appendTo('#restaurantlist');
    	   for(var i = 0; i < restaurants.length; i++) {
            // console.log("current hotel name", hotels[i].name)
            
            if(restaurants[i].name == $selectedrestaurant) {
              // console.log("matching hotel",hotels[i]);
              for (var key in restaurants[i].place[0]) {
                var restaurantLocation = restaurants[i].place[0].location; // array
                // console.log("location is",hotelLocation);
              }
              break;
            }
          }

          drawLocation(restaurantLocation, {icon: '../images/cutlery.png'});
         }
   });

    $('#activitybutton').on('click', function(){
      var $selectedactivity = $('#activityselect option:selected').text();
      $('<div class="itinerary-item"><span class="title">'+$selectedactivity+'</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>').appendTo('#activitylist');
       for(var i = 0; i < activities.length; i++) {
            // console.log("current hotel name", hotels[i].name)
            
            if(activities[i].name == $selectedactivity) {
              // console.log("matching hotel",hotels[i]);
              for (var key in activities[i].place[0]) {
                var activityLocation = activities[i].place[0].location; // array
                // console.log("location is",hotelLocation)
              }
              break;
            }
          }

          drawLocation(activityLocation, {icon: '../images/museum.png'});

  });


});
