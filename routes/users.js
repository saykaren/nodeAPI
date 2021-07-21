var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource - Kindly Karen');

  var dataArray = [
{name: "Karen", age: 21},
{name: "John", age: 32},
{name: "Bobby", age: 18},
{name: "Ricky", age: 25},
  ];

  res.json({
    data: dataArray
  })
});

module.exports = router;
