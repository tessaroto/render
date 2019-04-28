
const { Render } = require('../rendering');

class ExpressRender {
	constructor(config) {
		ExpressRender.render = new Render(config); 
		ExpressRender.config = config;
	}

  async middleware(req, res, next){

  	const html = await ExpressRender.render.process(req);

  	res.send(html);

	}
}

module.exports = ExpressRender;

