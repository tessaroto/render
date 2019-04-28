
const { Router } = require('../routers');
const Page  = require('./page');
const Layout  = require('./layout');

var router = new Router();
router.push("/test-:id/pr", new Page(Layout.getInstance().getByFolderId(1)))


class Render {

  constructor(config){
    this.config = config;
  }
 
  async process(req) {
    
    const route = router.resolve(req);
    const context = this.createContext(route);

		return await route.page.render(context);
  }

  createContext(route) {
  	const context = {
			config: this.config,
			req: route.req
		}; 
		
		return context;
  }

}

module.exports = Render;

