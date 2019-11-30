var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },
  	//displaying appending
  renderMessage: function(message) {
  	var chat = "";
	var chats = $('#chats');
  	Parse.readAll((data) => {
		for(var i = 0; i<4; i++) {
      if(data.results[i].roomname === $( "#rooms option:selected" ).text()){
      		chat += MessageView.render((data.results[i]));
			}
    }
		$(MessagesView.$chats).html(chat);
    });
  }

};
