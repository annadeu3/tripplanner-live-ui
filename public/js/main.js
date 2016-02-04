
  $('#hotelbutton').on('click', function(){
  	if ($('ul#hotellist>div').length > 0) {
  		console.log("Too many hotels!");
  	}
      else {
      	var $selectedhotel = $('#hotelselect option:selected').text();
      $('<div class="itinerary-item"><span class="title">'+$selectedhotel+'</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>').appendTo('#hotellist');
  	   }
   });

   $('#restaurantbutton').on('click', function(){
   		if ($('ul#restaurantlist>div').length > 2) {
  		console.log("Too many restaurants!");
  		}
      else {
      var $selectedrestaurant = $('#restaurantselect option:selected').text();
      $('<div class="itinerary-item"><span class="title">'+$selectedrestaurant+'</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>').appendTo('#restaurantlist');
  	  }
   });

    $('#activitybutton').on('click', function(){
      var $selectedactivity = $('#activityselect option:selected').text();
      $('<div class="itinerary-item"><span class="title">'+$selectedactivity+'</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>').appendTo('#activitylist');
   });