const restify = require('restify');

var server = restify.createServer({
  name: 'mockbook',
  version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('*', function (req, res, next) {
  res.send(req.params);
  return next();
});

server.listen(4567, function () {
  console.log('%s listening at %s', server.name, server.url);
});
