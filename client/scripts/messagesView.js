var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },
  	//displaying appending
  renderMessage: function(message) {
  	var chat = "";
	var chats = $('#chats');
  	Parse.readAll((data) => {
		for(var i = 0; i<data.results.length; i++) {
      		chat += MessageView.render((data.results[i]));
			}
		$(chats).append(chat);
    });
  }

};