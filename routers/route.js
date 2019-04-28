const RouteMatcher = require('./route-matcher')

class Route {

  constructor({req, page}){
  	console.log("req...")
  	console.log(req)
    this.req = req;
    this.page = page;
  }

}

module.exports = Route;

