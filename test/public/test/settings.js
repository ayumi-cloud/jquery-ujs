var App = App || {};


// ######## SETTINGS ###################################
App.host = $(".settings").metadata().host;
App.port = $(".settings").metadata().port;
App.ajax_timeout = $(".settings").metadata().ajax_timeout;


//
// ######## helper methods ###########################
//
App.base_url = App.host + ':' + App.port;

App.url = function(url) {
  return App.base_url + '/' + url;
};

App.confirmation_message = 'Are you absolutely sure?';

App.timeout = function(){
  setTimeout(function() { start(); }, App.ajax_timeout);
};

App.assert_callback_invoked = function(callback_name) {
  ok(true, callback_name + ' callback should have been invoked');
};

App.assert_callback_not_invoked = function(callback_name) {
  ok(false, callback_name + ' callback should not have been invoked');
};

App.assert_get_request = function(request_env){
  equals(request_env['REQUEST_METHOD'], 'GET', 'request type should be GET');
};

App.assert_post_request = function(request_env){
  equals(request_env['REQUEST_METHOD'], 'POST', 'request type should be POST');
};

App.assert_request_path = function(request_env, path) {
  equals(request_env['REQUEST_PATH'], path, 'request should be sent to right url');
};

App.die_live_events = function(){
  $('a[data-remote]').die();
  $('input[data-remote]').die();
  $('form[data-remote]').die('ajax:success'); 
  $('a[data-confirm]').die();
  $('input[data-confirm]').die();
};

App.teardown = function(){
  App.die_live_events();
  $('#fixtures').html('');
};
