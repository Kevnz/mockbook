const restify = require('restify');

const server = restify.createServer({
  name: 'mockbook',
  version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get(/^\/([a-zA-Z0-9_\.~-]+)\/(.*)/, (req, res, next) => {
  res.send({ success: true });
  return next();
});

server.listen(4567, () => {
  console.log('%s listening at %s', server.name, server.url);
});
