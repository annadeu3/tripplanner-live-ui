
  $('#hotelbutton').on('click', function(){
      var $selectedhotel = $('#hotelselect option:selected').text();
      $('<div class="itinerary-item"><span class="title">'+$selectedhotel+'</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>').appendTo('#hotellist');
   });

 