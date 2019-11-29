var FormView = {

  $form: $('form'),

  initialize: function() {
    //We think we should edit this
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    var val = $('#message').val()
   if (val === "") {
    return alert('Enter a message')   }
    Parse.create({
  username: 'Adam',
    text: val,
    roomname: 'lobby'
});
    var allMessage = Parse.fetch() 
    console.log(allMessage)
    // Stop the browser from submitting the form
    $('#message').val('');
    event.preventDefault();
    // Parse.readAll();
    console.log('click!');
 
},
  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};