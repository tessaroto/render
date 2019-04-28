const data = [
	{
    "_id" : "5cc25f59b85f96bcff6550c1",
    "folderId": "1",
    "templateId" : "App",
    "title" : "aaaa",
    "default" : true,
    "conditions" : {
        "startDate" : "",
        "endDate" : ""
    },
    "placehoder" : {
        "banner" : {
            "type" : "image",
            "data" : "http://blablabla/image.png"
        },
        "main" : {
            "type" : "text",
            "data" : "aaaaaaaaaa"
        }
    }
	}
]

class Layout {

  static getInstance() {
    if (!this.instance) 
      this.instance = new Layout();
    return this.instance;
  }

  getAll() {
  	return data;
	}

	getByFolderId(folderId) {
  	return data[0];
	}
}

module.exports = Layout;

