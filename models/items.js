const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'items.json'
);

const getItemsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
          cb([]);
        } else {
          cb(JSON.parse(fileContent));
        }
    });
};

module.export = class Items {
    constructor(tags, imageUrl, price, name, description) {
        this.tags = tags;
        this.imageUrl = imageUrl;
        this.price = price;
        this.name = name;
        this.description = description;
    }

    save() {
    getItemsFromFile(products => {
      if (this.id) {
        const existingProductIndex = products.findIndex(
          prod => prod.id === this.id
        );
        const updatedProducts = [...products];
        updatedProducts[existingProductIndex] = this;
        fs.writeFile(p, JSON.stringify(updatedProducts), err => {
          console.log(err);
        });
      } else {
        this.id = Math.random().toString();
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), err => {
          console.log(err);
        });
      }
    });
  }
}