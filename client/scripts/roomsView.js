var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  	for(var key in Rooms) {
  		$(RoomsView.$select).prepend(`<option value="${key}">${Rooms[key]}</option>`);
  			
  	 }	
  	},

  render: function() {
  	var button = $('#rooms');
  	$(button).click(function () {
  	return	alert('HIs');
  	})
	}
}