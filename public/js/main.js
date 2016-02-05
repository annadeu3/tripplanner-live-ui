$(document).ready(function() {
  var drawLocation = initialize_gmaps();
  var markerArr = [];
  var numdays = 1;

  $('#hotelbutton').on('click', function(){
    var currentMarker = markerArr.length;

  	if ($('ul#hotellist>div').length > 0) {
  		console.log("Too many hotels!");
  	}
      else {
      	var $selectedhotel = $('#hotelselect option:selected').text();

      $('<div class="itinerary-item" data-marker-id=' + currentMarker + '><span class="title">' + $selectedhotel + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>').appendTo('#hotellist');

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
        var newMarker = drawLocation(hotelLocation, {icon: '../images/hotel-bed.jpg'});
        markerArr.push(newMarker);
  	   }
   });

   $('#restaurantbutton').on('click', function(){
    var currentMarker = markerArr.length;
   		if ($('ul#restaurantlist>div').length > 2) {
  		console.log("Too many restaurants!");
  		}
      else {
        var $selectedrestaurant = $('#restaurantselect option:selected').text();
        $('<div class="itinerary-item" data-marker-id=' + currentMarker + '><span class="title">'+$selectedrestaurant+'</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>').appendTo('#restaurantlist');
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

          var newMarker = drawLocation(restaurantLocation, {icon: '../images/cutlery.png'});
          markerArr.push(newMarker);
         }
   });

    $('#activitybutton').on('click', function(){
      var currentMarker = markerArr.length;
      var $selectedactivity = $('#activityselect option:selected').text();
      $('<div class="itinerary-item" data-marker-id=' + currentMarker + '><span class="title">'+$selectedactivity+'</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>').appendTo('#activitylist');
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

          var newMarker = drawLocation(activityLocation, {icon: '../images/museum.png'});
          markerArr.push(newMarker);

  });

    $('.list-group').on('click','.btn-danger',function() { 
      // console.log("removing", $(this));
      // console.log($(this).parent('.itinerary-item').data('marker-id'));
       var thisMarkerId = ($(this).parent('.itinerary-item').data('marker-id'));
       markerArr[thisMarkerId].setMap(null);
      $(this).parent('.itinerary-item').remove();
    });

     // $('.list-group').on('click',function() { 
     //      console.log("clicked list-group");
     //    });
  $('#adddaybtn').on('click', function() {
    // console.log("adding another day");
    $('#adddaybtn').before('<button class="btn btn-circle day-btn">'+ ++numdays +'</button>');
    // $('<button class="btn btn-circle day-btn">'+ ++numdays +'</button>').appendTo('.day-buttons');
  });

});
