var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },
  	//displaying appending
  render: function() {
  	var allMessage = Parse.readAll() 
  	console.log(allMessage)
  	var compiled = _.template(
  
    "<div class='movie-info'>" +
      "<h3 class='movie-title'>" +
         "<%= movieTitle %>" + 
      "</h3>" +
      "<p class='movie-director'>" + 
         "<%= movieDirector %>" + 
      "</p>" + 
    "</div>" + 
  "</div>"
);
  }

};