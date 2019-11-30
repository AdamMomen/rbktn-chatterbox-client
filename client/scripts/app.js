var App = {

  $spinner: $('.spinner img'),

  username: 'Adam&Hania',

  initialize: function() {
    App.username = window.location.search.substr(10);
    MessagesView.renderMessage();
    FormView.initialize();
    RoomsView.initialize();
    //updates the messages list
    MessagesView.initialize();
    
    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    setInterval(function() {
      //console.log( MessagesView)
      MessagesView.renderMessage.call(this);
    },1000);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
