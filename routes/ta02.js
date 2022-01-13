//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

let users = [];
let userDis = true;
let addUserDis = true;

router.get('/', (req, res, next) => {
  // const users = users;
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    usrs : users,
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    userDis: userDis, 
    addUserDis: addUserDis
  });
});

// /ta02/addUser => POST
router.post('/addUser', (req, res, next) => {
  addUserDis = users.includes(req.body.user)
  if (addUserDis == false) {
    users.push( req.body.user);
    console.log(users)
  }
  
  res.redirect('/ta02');
});

// /ta02/removeUser => POST
router.post('/removeUser', (req, res, next) => {
  users = users.filter((name) => name !=req.body.removeUser )
  userDis = users.includes(req.body.removeUser)
  console.log(users)
  console.log(userDis)

  res.redirect('/ta02');
});

module.exports = router;
