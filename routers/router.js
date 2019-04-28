const RouteMatcher = require('./route-matcher')
const Route = require('./route');

class Router {

  constructor(){
    this.routeMatchers = [];
  }

  push(path, page){
    const matcher = new RouteMatcher(path, page);
    this.routeMatchers.push(matcher)
  }

  resolve(req) {
    const matchers = this.routeMatchers;
    const path = req.url.split("?")[0]
    var item = null;

    for (var i = 0; i < matchers.length; i++) {
      item = matchers[i].match(path);
      if(item){
        break;
      }
    }

    if (item){
      return this.createRoute(item, req);
    }
    else{
      return null;
    }
  }

  createRoute(data, req){
    return new Route({
        req:{
          url: req.url,
          params: data.params,
          headers: req.headers, 
          query: req.query  
        },
        page: data.page
      });  
  }
}

module.exports = Router;

