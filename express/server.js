
const { middleware } = require('../routers');
const ExpressRender = require('./express-render');
var express = require('express');

class Server {
	constructor(config) {
		this.config = config;
		const expressRender = new ExpressRender(config);
		this.app = express();
		this.app.use(expressRender.middleware);
	}

  listen(port) {
    this.app.listen(port);
  }
}

module.exports = Server;

