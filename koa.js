var koa = require('koa');
var app = koa();
var common = require('koa-common');
 
// enable logger middleware
app.use(common.logger('dev'));
 
// enable static middleware
app.use(common.static(__dirname + '/build'));

app.use(function *(){
  this.body = 'Hello World';
});

var server = app.listen(3000, function () {
    console.log('Listening on port %d', server.address().port);
});