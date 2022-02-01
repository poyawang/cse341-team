//TA03 PLACEHOLDER
const express = require('express');
const { json } = require('express/lib/response');
const router = express.Router();
const fetch = require('node-fetch');

let itemsList = []

class Items {
  constructor(tags, imageUrl, price, name, description) {
      this.tags = tags;
      this.imageUrl = imageUrl;
      this.price = price;
      this.name = name;
      this.description = description;
  }
}

function toJson(response) {
  if(response.ok){
    return response.json();
  } else {
    console.log('error', response)
  }
}

function getItems(data) {
  data.forEach((data) => {
    itemsList.push (
      new Items (
        data.tags, 
        data.imageUrl, 
        data.price, 
        data.name,
        data.description
      )
    )
  })

}

router.get('/', (req, res, next) => {
  fetch('https://byui-cse.github.io/cse341-course/lesson03/items.json')
    .then(toJson)
    .then(getItems)
    // .then(console.log(itemsList))
    .then(
      res.render('pages/ta03', {
        title: 'Team Activity 03',
        path: '/ta03', // For pug, EJS
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        items: itemsList
      })
    )
});

module.exports = router;
