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

//full_service1

router.get('/full_service1/results', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('full_service1/results', {
    'search' : req.query.search,
    'excluded': search === 'aa678910c',
    'included': search === 'bb123456c',
    'included_address': search === 'zz123456c',
    'special': search === 'gg123456c'
  });
  
});

router.get('/full_service1/results_confirm', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('full_service1/results_confirm', {
    'search' : req.query.search,
    'excluded': search === 'aa678910c',
    'included': search === 'bb123456c',
    'included_address': search === 'zz123456c',
    'special': search === 'gg123456c'
  });
  
});


router.get('/full_service1/issue_excluded', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var details_same2 = req.query.details_same2;

  if (details_same2 == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('full_service1/issue_excluded');


  } else {

          // redirect to the relevant page
    res.redirect('/full_service1/issue_cant_details');

  }

});


//change address

router.get('/change_address/results', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('change_address/results', {
    'search' : req.query.search,
    'excluded': search === 'aa678910c',
    'included': search === 'bb123456c',
    'included_address': search === 'zz123456c',
    'special': search === 'gg123456c'
  });
  
});

router.get('/change_address/results_confirm', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('change_address/results_confirm', {
    'search' : req.query.search,
    'excluded': search === 'aa678910c',
    'included': search === 'bb123456c',
    'included_address': search === 'zz123456c',
    'special': search === 'gg123456c'
  });
  
});

router.get('/change_address/issue_address_confirm', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var details_same = req.query.details_same;

  if (details_same == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('change_address/issue_address_confirm');


  } else {

          // redirect to the relevant page
    res.redirect('/change_address/issue_cant_details');

  }

});

router.get('/change_address/issue_excluded', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var details_same2 = req.query.details_same2;

  if (details_same2 == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('change_address/issue_excluded');


  } else {

          // redirect to the relevant page
    res.redirect('/change_address/issue_cant_details');

  }

});



router.get('/change_address/print', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var address_same = req.query.address_same;

  if (address_same == "Yes" ){

    // if address_same is any other value (or is missing) render the page requested
    res.render('change_address/print');


  } else {

          // redirect to the relevant page
    res.redirect('/change_address/security_address');

  }

});

router.get('/change_address/change_address', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var employer_name = req.query.employer_name;
  var address = req.query.address;
  var marriage = req.query.marriage;

  if (employer_name == "Yes" && address == "Yes" || marriage == "Yes" ){

    // if address_same is any other value (or is missing) render the page requested
    res.render('change_address/change_address');


  } 

  else if (employer_name == "No" && address == "No" || marriage == "No" ){

          // redirect to the relevant page
    res.redirect('/change_address/issue_cant');

  }


  else {

          // redirect to the relevant page
    res.redirect('/change_address/security_address2');

  }

});


//sprint 5

router.get('/sprint5/results', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('sprint5/results', {
    'search' : req.query.search,
    'excluded': search === 'aa678910c',
    'included': search === 'bb123456c',
    'included_address': search === 'zz123456c',
    'special': search === 'gg123456c'
  });
  
});

router.get('/sprint5/results_confirm', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('sprint5/results_confirm', {
    'search' : req.query.search,
    'excluded': search === 'aa678910c',
    'included': search === 'bb123456c',
    'included_address': search === 'zz123456c',
    'special': search === 'gg123456c'
  });
  
});

router.get('/sprint5/issue_address_confirm', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var details_same = req.query.details_same;

  if (details_same == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('sprint5/issue_address_confirm');


  } else {

          // redirect to the relevant page
    res.redirect('/sprint5/issue_cant_details');

  }

});

router.get('/sprint5/issue_excluded', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var details_same2 = req.query.details_same2;

  if (details_same2 == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('sprint5/issue_excluded');


  } else {

          // redirect to the relevant page
    res.redirect('/sprint5/issue_cant_details');

  }

});



router.get('/sprint5/print', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var address_same = req.query.address_same;

  if (address_same == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('sprint5/print');


  } else {

          // redirect to the relevant page
    res.redirect('/sprint5/issue_cant');

  }

});


//sprint 3

router.get('/sprint3/results', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('sprint3/results', {
    'search' : req.query.search,
    'excluded': search === 'aa678910c',
    'included': search === 'bb123456c',
    'included_address': search === 'zz123456c'
  });
  
});

router.get('/sprint3/results_confirm', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('sprint3/results_confirm', {
    'search' : req.query.search,
    'excluded': search === 'aa678910c',
    'included': search === 'bb123456c',
    'included_address': search === 'zz123456c'
  });
  
});

router.get('/sprint3/issue_address_confirm', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var details_same = req.query.details_same;

  if (details_same == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('sprint3/issue_address_confirm');


  } else {

          // redirect to the relevant page
    res.redirect('/sprint3/issue_cant_details');

  }

});

router.get('/sprint3/issue_excluded', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var details_same2 = req.query.details_same2;

  if (details_same2 == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('sprint3/issue_excluded');


  } else {

          // redirect to the relevant page
    res.redirect('/sprint3/issue_cant_details');

  }

});



router.get('/sprint3/sent', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var address_same = req.query.address_same;

  if (address_same == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('sprint3/sent');


  } else {

          // redirect to the relevant page
    res.redirect('/sprint3/issue_cant');

  }

});



//sprint2

router.get('/sprint2/sent', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var address_same = req.query.address_same;

  if (address_same == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('sprint2/sent');


  } else {

      // redirect to the relevant page
    res.redirect('/sprint2/issue_cant');

  }

});


router.get('/sprint2/issue_address_confirm', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var address_same = req.query.address_same;

  if (address_same == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('sprint2/issue_address_confirm');


  } else {

          // redirect to the relevant page
    res.redirect('/sprint2/issue_cant');

  }

});


router.get('/sprint2/results', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('sprint2/results', {
    'search' : req.query.search,
    'excluded': search === 'aa678910c',
    'included': search === 'bb123456c',
    'included_address': search === 'zz123456c'
  });
  
});


router.get('/sprint2/results_confirm', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('sprint2/results_confirm', {
    'search' : req.query.search,
    'excluded': search === 'aa678910c',
    'included': search === 'bb123456c',
    'included_address': search === 'zz123456c'
  });
  
});


//sprint1

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

//sprint 0

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
