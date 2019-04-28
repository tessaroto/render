const Folder = require('./folder');
const Layout = require('./layout');
const Page = require('./Page');

class Resolver {

  static getInstance() {
    if (!this.instance) 
      this.instance = new Resolver();
    return this.instance;
  }

  async resolve(url) {    
    const dic = this.getAll();

    return new Page(dic[url]);
  }

  getAll() {

    let tree = Folder.getInstance().getTree();
    var dic = this.map("", tree[0]);

    return dic;
  }

  map(parent_path, folder) {
    let result = {};
    const path = parent_path + (folder.name == "/" || parent_path == "/" ? "" : "/") + folder.name;

    console.log("path = " + path)

    result[path] = Layout.getInstance().getByFolderId(folder._id);

    if (folder.children != null){
        folder.children.forEach((folder, index, arr)=>{
          let children = this.map(path, folder);
          Object.assign(result, children);
        }); 
    }
    
    delete result[path].children        
    
        
    return result;
  }
}

module.exports = Resolver;

