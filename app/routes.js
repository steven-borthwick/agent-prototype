var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  
  res.render('index');

});


// Example routes - feel free to delete these

// Passing data into a page

router.get('/examples/template-data', function (req, res) {

  res.render('examples/template-data', { 'name' : 'Foo' });

});

// Branching

router.get('/examples/over-18', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var over18 = req.query.over18;

  if (over18 == "false"){

    // redirect to the relevant page
    res.redirect("/examples/under-18");

  } else {

    // if over18 is any other value (or is missing) render the page requested
    res.render('examples/over-18');

  }

});


router.get('/sprint1/sent', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var address_same = req.query.address_same;

  if (address_same == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('sprint1/sent');


  } else {

      // redirect to the relevant page
    res.redirect('/sprint1/issue_cant');

  }

});



router.get('/results', function (req, res) {

  var search = req.query.search;

  res.render('results', { 'search' : search });
  
});

router.get('/sprint1/results', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('sprint1/results', {
    'search' : req.query.search,
    'excluded': search === 'aa678910c',
    'included': search === 'bb123456c',
    'included_address': search === 'zz123456c'
  });
  
});


router.get('/results_non_found', function (req, res) {

  var search = req.query.search;

  res.render('results_non_found', { 'search' : search });
  
});

router.get('/issue_amended', function (req, res) {

  var uprn = req.query.uprn;

  res.render('issue_amended', { 'uprn' : uprn });

});



router.get('/issuev2_amended', function (req, res) {

  var uprn = req.query.uprn;
  var lineOne = req.query.lineOne;
  var lineTwo = req.query.lineTwo;
  var lineThree = req.query.lineThree;
  var city = req.query.city;

  res.render('issuev2_amended', { 'lineOne' : lineOne , 'lineTwo' : lineTwo , 'lineThree' : lineThree , 'city' : city  , 'uprn' : uprn });

});



router.get('/issuev3_amended', function (req, res) {

  var lineOne = req.query.lineOne;
  var lineTwo = req.query.lineTwo;
  var lineThree = req.query.lineThree;
  var city = req.query.city;
  var city = req.query.postcode;
  var country = req.query.country;

  res.render('issuev3_amended', { 'lineOne' : lineOne , 'lineTwo' : lineTwo , 'lineThree' : lineThree , 'city' : city , 'country' : country  });

});


// add your routes here

module.exports = router;
