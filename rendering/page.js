
class Page {

  constructor(layout){
    this.layout = layout;
  }
 
  async render(context) {
    console.log(context)
    const html = context.config.templateEngine.renderToString(this.layout.templateId, {name: context.req.params.id});

    console.log(html)

    return html;
  }
}

module.exports = Page;

