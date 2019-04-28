const pathToRegexp = require('path-to-regexp')
const querystring = require('querystring');


class RouteMatcher {

  constructor(path, page){
    this.path = path;
    this.keys = []
    this.regexp = pathToRegexp(path, this.keys);
    this.page = page;
    this.params = null;
    this.path = null;
  }

  match(url) {
    var match;

    if (url != null) {
      match = this.regexp.exec(url)
    }
    console.log(match);

    if (!match) {
      return null;
    }

    // store values
    let params = {};
    let path = match[0]
    const page = this.page;

    for (var i = 1; i < match.length; i++) {
      var key = this.keys[i - 1];
      var prop = key.name;
      var val = this.decode_param(match[i])

      if (val !== undefined || !(hasOwnProperty.call(params, prop))) {
        params[prop] = val;
      }
    }

    return {
      path,
      params,
      page
    };
  }

  decode_param(val) {
    if (typeof val !== 'string' || val.length === 0) {
      return val;
    }

    try {
      return decodeURIComponent(val);
    } catch (err) {
      if (err instanceof URIError) {
        err.message = 'Failed to decode param \'' + val + '\'';
        err.status = err.statusCode = 400;
      }

      throw err;
    }
  }

}

module.exports = RouteMatcher;

