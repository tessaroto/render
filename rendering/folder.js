const data = [
	{
	    "_id" : "1",
	    "name" : "/",
	    "parentId" : null
	},
	{
	    "_id" : "2",
	    "name" : "test",
	    "parentId" : "1"
	},
	{
	    "_id" : "3",
	    "name" : "test3",
	    "parentId" : "1"
	},
	{
	    "_id" : "4",
	    "name" : "testsss",
	    "parentId" : "3"
	},
]

class Folder {

  static getInstance() {
    if (!this.instance) 
      this.instance = new Folder();
    return this.instance;
  }

  getAll() {
  	return data;
	}

	getTree() {
  	return this.indentArray(null, this.getAll());
	}

	indentArray(parentId, folders) {
        
    let items = folders.filter((folder)=>{
        return folder.parentId == parentId;
    })
    
    items.forEach((folder, index, arr)=>{
            folder.children = this.indentArray(folder._id, folders)
    });
        
    return items;
  }

}

module.exports = Folder;

