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

//full_service2

router.get('/full_service2/results', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('full_service2/results', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'included_address': search === 'zz123456c',
    'special': search === 'ff123456c'
  });

});

router.get('/full_service2/results_confirm', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('full_service2/results_confirm', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'included_address': search === 'zz123456c',
    'special': search === 'ff123456c'
  });

});


router.get('/full_service2/issue_excluded', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var details_same2 = req.query.details_same2;

  if (details_same2 == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('full_service2/issue_excluded');


  } else {

          // redirect to the relevant page
    res.redirect('/full_service2/issue_cant_details');

  }

});

router.get('/full_service2/issue_address_confirm', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var details_same = req.query.details_same;

  if (details_same == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('full_service2/issue_address_confirm');


  } else {

          // redirect to the relevant page
    res.redirect('/full_service2/issue_cant_details');

  }

  });

  router.get('/full_service2/print', function (req, res) {

    // get the answer from the query string (eg. ?address_same=No)
    var address_same = req.query.address_same;

    if (address_same == "Yes" ){

      // if address_same is any other value (or is missing) render the page requested
      res.render('full_service2/print');


    } else {

            // redirect to the relevant page
      res.redirect('/full_service2/security_address2');

    }

  });

  router.get('/full_service2/change_address', function (req, res) {

    // get the answer from the query string (eg. ?address_same=No)
    var security_passed = req.query.security_passed;

    if (security_passed == "Yes" ){

      // if address_same is any other value (or is missing) render the page requested
      res.render('full_service2/change_address');


    } else {

            // redirect to the relevant page
      res.redirect('/full_service2/issue_cant');

    }

  });

  router.get('/full_service2/forecast', function (req, res) {

    // get the answer from the query string (eg. ?address_same=No)
    var security_passed = req.query.security_passed;

    if (security_passed == "Yes" ){

      // if address_same is any other value (or is missing) render the page requested
      res.render('full_service2/forecast');


    } else {

            // redirect to the relevant page
      res.redirect('/full_service2/issue_cant');

    }

  });


//full_service1

router.get('/full_service1/results', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('full_service1/results', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'included_address': search === 'zz123456c',
    'special': search === 'ff123456c'
  });

});

router.get('/full_service1/results_confirm', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('full_service1/results_confirm', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'included_address': search === 'zz123456c',
    'special': search === 'ff123456c'
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
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'included_address': search === 'zz123456c',
    'special': search === 'ff123456c'
  });

});

router.get('/change_address/results_confirm', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('change_address/results_confirm', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'included_address': search === 'zz123456c',
    'special': search === 'ff123456c'
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

//MVP

router.get('/MVP/results', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('MVP/results', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'included_address': search === 'zz123456c',
    'special': search === 'ff123456c'
  });

});

router.get('/MVP/results_confirm', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('MVP/results_confirm', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'name': search === 'cd654321c',
    'address': search === 'nt109876c',
    'special': search === 'ff123456c'
  });
});

router.get('/MVP/results_confirm_audit', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('MVP/results_confirm_audit', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'included_address': search === 'zz123456c',
    'special': search === 'ff123456c',
    'name': search === 'nn123456c',
    'address': search === 'hh123456c'
  });

});

router.get('/MVP/results_test', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('MVP/results_test', {
    'search' : req.query.search,
    'change': search === 'dd123456c',
    'stuff': search === 'cc123456c',
  });

});

router.get('/MVP/issue_address_confirm', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var details_same = req.query.details_same;

  if (details_same == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('MVP/issue_address_confirm');


  } else {

          // redirect to the relevant page
    res.redirect('/MVP/issue_cant_details');

  }

});

router.get('/MVP/issue_address_exclusion', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var details_same2 = req.query.details_same2;

  if (details_same2 == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('MVP/issue_address_exclusion');


  } else {

          // redirect to the relevant page
    res.redirect('/MVP/issue_cant_details');

  }

});



router.get('/MVP/print', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var address_same = req.query.address_same;

  if (address_same == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('MVP/print');


  } else {

          // redirect to the relevant page
    res.redirect('/MVP/issue_cant');

  }

});

// contingency

router.get('/contingency/results', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('contingency/results', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'included_address': search === 'zz123456c',
    'special': search === 'ff123456c'
  });

});

router.get('/contingency/results_confirm', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('contingency/results_confirm', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'name': search === 'cd654321c',
    'address': search === 'nt109876c',
    'special': search === 'ff123456c'
  });
});

router.get('/contingency/results_confirm2', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('contingency/results_confirm2', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'name': search === 'cd654321c',
    'address': search === 'nt109876c',
    'special': search === 'ff123456c'
  });
});

router.get('/contingency/results_confirm_audit', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('contingency/results_confirm_audit', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'included_address': search === 'zz123456c',
    'special': search === 'ff123456c',
    'name': search === 'nn123456c',
    'address': search === 'hh123456c'
  });

});

router.get('/contingency/results_test', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('contingency/results_test', {
    'search' : req.query.search,
    'change': search === 'dd123456c',
    'stuff': search === 'cc123456c',
  });

});

router.get('/contingency/issue_address_confirm', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var details_same = req.query.details_same;

  if (details_same == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('contingency/issue_address_confirm');


  } else {

          // redirect to the relevant page
    res.redirect('/contingency/issue_cant_details');

  }

});

router.get('/contingency/issue_address_exclusion', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var details_same2 = req.query.details_same2;

  if (details_same2 == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('contingency/issue_address_exclusion');


  } else {

          // redirect to the relevant page
    res.redirect('/contingency/issue_cant_details');

  }

});



router.get('/contingency/print', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var address_same = req.query.address_same;

  if (address_same == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('contingency/print');


  } else {

          // redirect to the relevant page
    res.redirect('/contingency/issue_cant');

  }

});

router.get('/contingency/print_v2', function (req, res) {

  var NInumber = req.query.NInumber;

  res.render('contingency/print_v2', { 'NInumber' : NInumber  });

});


// contingency_test

router.get('//results', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('contingency_test/results', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'included_address': search === 'zz123456c',
    'special': search === 'ff123456c'
  });

});

router.get('/contingency_test/results_confirm', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('contingency_test/results_confirm', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'name': search === 'cd654321c',
    'address': search === 'nt109876c',
    'special': search === 'ff123456c'
  });
});

router.get('/contingency_test/results_confirm2', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('contingency_test/results_confirm2', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'name': search === 'cd654321c',
    'address': search === 'nt109876c',
    'special': search === 'ff123456c'
  });
});

router.get('/contingency_test/results_confirm_audit', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('contingency_test/results_confirm_audit', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'included_address': search === 'zz123456c',
    'special': search === 'ff123456c',
    'name': search === 'nn123456c',
    'address': search === 'hh123456c'
  });

});

router.get('/contingency_test/results_test', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('contingency_test/results_test', {
    'search' : req.query.search,
    'change': search === 'dd123456c',
    'stuff': search === 'cc123456c',
  });

});

router.get('/contingency_test/ole_details', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('contingency_test/ole_details', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'name': search === 'cd654321c',
    'address': search === 'nt109876c',
    'special': search === 'ff123456c'
  });
});

router.get('/contingency_test/issue_address_confirm', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var details_same = req.query.details_same;

  if (details_same == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('contingency_test/issue_address_confirm');


  } else {

          // redirect to the relevant page
    res.redirect('/contingency_test/issue_cant_details');

  }

});

router.get('/contingency_test/issue_address_exclusion', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var details_same2 = req.query.details_same2;

  if (details_same2 == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('contingency_test/issue_address_exclusion');


  } else {

          // redirect to the relevant page
    res.redirect('/contingency_test/issue_cant_details');

  }

});



router.get('/contingency_test/print', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var address_same = req.query.address_same;

  if (address_same == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('contingency_test/print');


  } else {

          // redirect to the relevant page
    res.redirect('/contingency_test/issue_cant');

  }

});

router.get('/contingency_test/print_v2', function (req, res) {

  var NInumber = req.query.NInumber;

  res.render('contingency_test/print_v2', { 'NInumber' : NInumber  });

});

// contingency_test2



router.get('/contingency_test2/results_confirm2', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('contingency_test2/results_confirm2', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'name': search === 'cd654321c',
    'address': search === 'nt109876c',
    'special': search === 'ff123456c'
  });
});


router.get('/contingency_test2/ole_details', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('contingency_test2/ole_details', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'name': search === 'cd654321c',
    'address': search === 'nt109876c',
    'special': search === 'ff123456c'
  });
});

router.get('/contingency_test2/issue_address_confirm', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var details_same = req.query.details_same;

  if (details_same == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('contingency_test2/issue_address_confirm');


  } else {

          // redirect to the relevant page
    res.redirect('/contingency_test2/issue_cant_details');

  }

});

router.get('/contingency_test2/issue_address_exclusion', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var details_same2 = req.query.details_same2;

  if (details_same2 == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('contingency_test2/issue_address_exclusion');


  } else {

          // redirect to the relevant page
    res.redirect('/contingency_test2/issue_cant_details');

  }

});



router.get('/contingency_test2/print', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var address_same = req.query.address_same;

  if (address_same == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('contingency_test2/print');


  } else {

          // redirect to the relevant page
    res.redirect('/contingency_test2/issue_cant');

  }

});

router.get('/contingency_test2/print_v2', function (req, res) {

  var NInumber = req.query.NInumber;

  res.render('contingency_test2/print_v2', { 'NInumber' : NInumber  });

});


// contingency_test3



router.get('/contingency_test3/results_confirm2', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('contingency_test3/results_confirm2', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'name': search === 'cd654321c',
    'address': search === 'nt109876c',
    'special': search === 'ff123456c'
  });
});

router.get('/contingency_test3/results_confirm3', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('contingency_test3/results_confirm3', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'name': search === 'cd654321c',
    'address': search === 'nt109876c',
    'special': search === 'ff123456c'
  });
});

router.get('/contingency_test3/ole_details', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('contingency_test3/ole_details', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'name': search === 'cd654321c',
    'address': search === 'nt109876c',
    'special': search === 'ff123456c'
  });
});

router.get('/contingency_test3/issue_address_confirm', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var details_same = req.query.details_same;

  if (details_same == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('contingency_test3/issue_address_confirm');


  } else {

          // redirect to the relevant page
    res.redirect('/contingency_test3/issue_cant_details');

  }

});

router.get('/contingency_test3/issue_address_exclusion', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var details_same2 = req.query.details_same2;

  if (details_same2 == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('contingency_test3/issue_address_exclusion');


  } else {

          // redirect to the relevant page
    res.redirect('/contingency_test3/issue_cant_details');

  }

});



router.get('/contingency_test3/print', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var address_same = req.query.address_same;

  if (address_same == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('contingency_test3/print');


  } else {

          // redirect to the relevant page
    res.redirect('/contingency_test3/issue_cant');

  }

});

router.get('/contingency_test3/print_v2', function (req, res) {

  var NInumber = req.query.NInumber;

  res.render('contingency_test3/print_v2', { 'NInumber' : NInumber  });

});

// contigency_test_postcode

// contingency_postcode



router.get('/contingency_postcode/results_confirm2', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('contingency_postcode/results_confirm2', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'name': search === 'cd654321c',
    'address': search === 'nt109876c',
    'special': search === 'ff123456c'
  });
});

router.get('/contingency_postcode/results_confirm3', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('contingency_postcode/results_confirm3', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'name': search === 'cd654321c',
    'address': search === 'nt109876c',
    'special': search === 'ff123456c'
  });
});

router.get('/contingency_postcode/results_confirm4', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('contingency_postcode/results_confirm4', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'name': search === 'cd654321c',
    'address': search === 'nt109876c',
    'special': search === 'ff123456c'
  });
});

router.get('/contingency_postcode/results_confirm5', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('contingency_postcode/results_confirm5', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'name': search === 'cd654321c',
    'address': search === 'nt109876c',
    'special': search === 'ff123456c'
  });
});


router.get('/contingency_postcode/ole_details', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('contingency_postcode/ole_details', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'name': search === 'cd654321c',
    'address': search === 'nt109876c',
    'special': search === 'ff123456c'
  });
});

router.get('/contingency_postcode/issue_address_confirm', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var details_same = req.query.details_same;

  if (details_same == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('contingency_postcode/issue_address_confirm');


  } else {

          // redirect to the relevant page
    res.redirect('/contingency_postcode/issue_cant_details');

  }

});

router.get('/contingency_postcode/issue_address_exclusion', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var details_same2 = req.query.details_same2;

  if (details_same2 == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('contingency_postcode/issue_address_exclusion');


  } else {

          // redirect to the relevant page
    res.redirect('/contingency_postcode/issue_cant_details');

  }

});



router.get('/contingency_postcode/print', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var address_same = req.query.address_same;

  if (address_same == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('contingency_postcode/print');


  } else {

          // redirect to the relevant page
    res.redirect('/contingency_postcode/issue_cant');

  }

});

router.get('/contingency_postcode/print_v2', function (req, res) {

  var NInumber = req.query.NInumber;

  res.render('contingency_postcode/print_v2', { 'NInumber' : NInumber  });

});


// contingency_test4



router.get('/contingency_test4/results_confirm2', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('contingency_test4/results_confirm2', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'name': search === 'cd654321c',
    'address': search === 'nt109876c',
    'special': search === 'ff123456c'
  });
});

router.get('/contingency_test4/results_confirm3', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('contingency_test4/results_confirm3', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'name': search === 'cd654321c',
    'address': search === 'nt109876c',
    'special': search === 'ff123456c'
  });
});

router.get('/contingency_test4/ole_details', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('contingency_test4/ole_details', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'name': search === 'cd654321c',
    'address': search === 'nt109876c',
    'special': search === 'ff123456c'
  });
});

router.get('/contingency_test4/issue_address_confirm', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var details_same = req.query.details_same;

  if (details_same == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('contingency_test4/issue_address_confirm');


  } else {

          // redirect to the relevant page
    res.redirect('/contingency_test4/issue_cant_details');

  }

});

router.get('/contingency_test4/issue_address_exclusion', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var details_same2 = req.query.details_same2;

  if (details_same2 == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('contingency_test4/issue_address_exclusion');


  } else {

          // redirect to the relevant page
    res.redirect('/contingency_test4/issue_cant_details');

  }

});



router.get('/contingency_test4/print', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var address_same = req.query.address_same;

  if (address_same == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('contingency_test4/print');


  } else {

          // redirect to the relevant page
    res.redirect('/contingency_test4/issue_cant');

  }

});

router.get('/contingency_test4/print_v2', function (req, res) {

  var NInumber = req.query.NInumber;

  res.render('contingency_test4/print_v2', { 'NInumber' : NInumber  });

});

// contingency_full



router.get('/contingency_full/results_confirm2', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('contingency_full/results_confirm2', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'name': search === 'cd654321c',
    'address': search === 'nt109876c',
    'special': search === 'ff123456c'
  });
});

router.get('/contingency_full/results_confirm3', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('contingency_full/results_confirm3', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'name': search === 'cd654321c',
    'address': search === 'nt109876c',
    'special': search === 'ff123456c'
  });
});

router.get('/contingency_full/ole_details', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('contingency_full/ole_details', {
    'search' : req.query.search,
    'excluded': search === 'ff123456c',
    'included': search === 'qq123456c',
    'name': search === 'cd654321c',
    'address': search === 'nt109876c',
  });
});

router.get('/contingency_full/issue_address_confirm', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var details_same = req.query.details_same;

  if (details_same == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('contingency_full/issue_address_confirm');


  } else {

          // redirect to the relevant page
    res.redirect('/contingency_full/issue_cant_details');

  }

});


router.get('/contingency_full/issue_address_alt', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var address_UK = req.query.address_UK;

  if (address_UK == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('contingency_full/issue_address_alt');


  } else {

          // redirect to the relevant page
    res.redirect('/contingency_full/forecast_alt');

  }

});


router.get('/contingency_full/issue_address_exclusion', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var details_same2 = req.query.details_same2;

  if (details_same2 == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('contingency_full/issue_address_exclusion');


  } else {

          // redirect to the relevant page
    res.redirect('/contingency_full/issue_cant_details');

  }

});



router.get('/contingency_full/print', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var address_same = req.query.address_same;

  if (address_same == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('contingency_full/print');


  } else {

          // redirect to the relevant page
    res.redirect('/contingency_full/issue_cant');

  }

});

router.get('/contingency_full/print_v2', function (req, res) {

  var NInumber = req.query.NInumber;

  res.render('contingency_full/print_v2', { 'NInumber' : NInumber  });

});

// contingency_full2



router.get('/contingency_full2/results_confirm2', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('contingency_full2/results_confirm2', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'name': search === 'cd654321c',
    'address': search === 'nt109876c',
    'special': search === 'ff123456c'
  });
});

router.get('/contingency_full2/results_confirm3', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('contingency_full2/results_confirm3', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'name': search === 'cd654321c',
    'address': search === 'nt109876c',
    'special': search === 'ff123456c'
  });
});

router.get('/contingency_full2/ole_details', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('contingency_full2/ole_details', {
    'search' : req.query.search,
    'excluded': search === 'ff123456c',
    'included': search === 'qq123456c',
    'name': search === 'cd654321c',
    'address': search === 'nt109876c',
  });
});

router.get('/contingency_full2/issue_address_confirm', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var details_same = req.query.details_same;

  if (details_same == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('contingency_full2/issue_address_confirm');


  } else {

          // redirect to the relevant page
    res.redirect('/contingency_full2/issue_cant_details');

  }

});


router.get('/contingency_full2/issue_address_alt', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var address_UK = req.query.address_UK;

  if (address_UK == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('contingency_full2/issue_address_alt');


  } else {

          // redirect to the relevant page
    res.redirect('/contingency_full2/forecast_alt');

  }

});


router.get('/contingency_full2/issue_address_exclusion', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var details_same2 = req.query.details_same2;

  if (details_same2 == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('contingency_full2/issue_address_exclusion');


  } else {

          // redirect to the relevant page
    res.redirect('/contingency_full2/issue_cant_details');

  }

});



router.get('/contingency_full2/print', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var address_same = req.query.address_same;

  if (address_same == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('contingency_full2/print');


  } else {

          // redirect to the relevant page
    res.redirect('/contingency_full2/issue_cant');

  }

});

router.get('/contingency_full2/print_v2', function (req, res) {

  var NInumber = req.query.NInumber;

  res.render('contingency_full2/print_v2', { 'NInumber' : NInumber  });

});

// contingency_full3



router.get('/contingency_full3/results_confirm2', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('contingency_full3/results_confirm2', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'name': search === 'cd654321c',
    'address': search === 'nt109876c',
    'special': search === 'ff123456c'
  });
});

router.get('/contingency_full3/results_confirm3', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('contingency_full3/results_confirm3', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'name': search === 'cd654321c',
    'address': search === 'nt109876c',
    'special': search === 'ff123456c'
  });
});

router.get('/contingency_full3/ole_details', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('contingency_full3/ole_details', {
    'search' : req.query.search,
    'excluded': search === 'ff123456c',
    'included': search === 'qq123456c',
    'name': search === 'cd654321c',
    'address': search === 'nt109876c',
  });
});

router.get('/contingency_full3/issue_address_confirm', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var details_same = req.query.details_same;

  if (details_same == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('contingency_full3/issue_address_confirm');


  } else {

          // redirect to the relevant page
    res.redirect('/contingency_full3/issue_cant_details');

  }

});


router.get('/contingency_full3/issue_address_alt', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var address_UK = req.query.address_UK;

  if (address_UK == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('contingency_full3/issue_address_alt');


  } else {

          // redirect to the relevant page
    res.redirect('/contingency_full3/forecast_alt');

  }

});


router.get('/contingency_full3/issue_address_exclusion', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var details_same2 = req.query.details_same2;

  if (details_same2 == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('contingency_full3/issue_address_exclusion');


  } else {

          // redirect to the relevant page
    res.redirect('/contingency_full3/issue_cant_details');

  }

});



router.get('/contingency_full3/print', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var address_same = req.query.address_same;

  if (address_same == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('contingency_full3/print');


  } else {

          // redirect to the relevant page
    res.redirect('/contingency_full3/issue_cant');

  }

});

router.get('/contingency_full3/print_v2', function (req, res) {

  var NInumber = req.query.NInumber;

  res.render('contingency_full3/print_v2', { 'NInumber' : NInumber  });

});

// enquiriesv4



router.get('/enquiriesv4/results_confirm2', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('enquiriesv4/results_confirm2', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'name': search === 'cd654321c',
    'address': search === 'nt109876c',
    'special': search === 'ff123456c'
  });
});

router.get('/enquiriesv4/results_confirm3', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('enquiriesv4/results_confirm3', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'name': search === 'cd654321c',
    'address': search === 'nt109876c',
    'special': search === 'ff123456c'
  });
});

router.get('/enquiriesv4/ole_details', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('enquiriesv4/ole_details', {
    'search' : req.query.search,
    'excluded': search === 'ff123456c',
    'included': search === 'qq123456c',
    'name': search === 'cd654321c',
    'address': search === 'nt109876c',
  });
});

router.get('/enquiriesv4/issue_address_confirm', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var details_same = req.query.details_same;

  if (details_same == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('enquiriesv4/issue_address_confirm');


  } else {

          // redirect to the relevant page
    res.redirect('/enquiriesv4/issue_cant_details');

  }

});


router.get('/enquiriesv4/issue_address_alt', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var address_UK = req.query.address_UK;

  if (address_UK == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('enquiriesv4/issue_address_alt');


  } else {

          // redirect to the relevant page
    res.redirect('/enquiriesv4/forecast_alt');

  }

});


router.get('/enquiriesv4/issue_address_exclusion', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var details_same2 = req.query.details_same2;

  if (details_same2 == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('enquiriesv4/issue_address_exclusion');


  } else {

          // redirect to the relevant page
    res.redirect('/enquiriesv4/issue_cant_details');

  }

});



router.get('/enquiriesv4/print', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var address_same = req.query.address_same;

  if (address_same == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('enquiriesv4/print');


  } else {

          // redirect to the relevant page
    res.redirect('/enquiriesv4/issue_cant');

  }

});

router.get('/enquiriesv4/print_v2', function (req, res) {

  var NInumber = req.query.NInumber;

  res.render('enquiriesv4/print_v2', { 'NInumber' : NInumber  });

});


// enquiriesv5
router.get('/enquiriesv5/results_confirm2', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('enquiriesv5/results_confirm2', {
    'search' : req.query.search,
    'QQ123456C': search === 'qq123456c',
    'DD678910C': search === 'dd678910c',
    'FF123456C': search === 'ff123456c',
    'FF654321B': search === 'ff654321b',
    'NK678910D': search === 'nk678910d',
    'NT678910A': search === 'nt678910a',
    'ZZ345678A': search === 'zz345678a',
    'BG345678A': search === 'bg345678a'
  });
});

router.get('/enquiriesv5/ole_details', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('enquiriesv5/ole_details', {
    'search' : req.query.search,
    'excluded': search === 'ff123456c',
    'included': search === 'qq123456c',
    'name': search === 'cd654321c',
    'address': search === 'nt109876c',
  });
});

router.get('/enquiriesv5/issue_address_confirm', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var details_same = req.query.details_same;

  if (details_same == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('enquiriesv5/issue_address_confirm');


  } else {

          // redirect to the relevant page
    res.redirect('/enquiriesv5/issue_cant_details');

  }

});


router.get('/enquiriesv5/issue_address_alt', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var address_UK = req.query.address_UK;

  if (address_UK == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('enquiriesv5/issue_address_alt');


  } else {

          // redirect to the relevant page
    res.redirect('/enquiriesv5/forecast_alt');

  }

});


router.get('/enquiriesv5/issue_address_exclusion', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var details_same2 = req.query.details_same2;

  if (details_same2 == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('enquiriesv5/issue_address_exclusion');


  } else {

          // redirect to the relevant page
    res.redirect('/enquiriesv5/issue_cant_details');

  }

});



router.get('/enquiriesv5/print', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var address_same = req.query.address_same;

  if (address_same == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('enquiriesv5/print');


  } else {

          // redirect to the relevant page
    res.redirect('/enquiriesv5/issue_cant');

  }

});

router.get('/enquiriesv5/print_v2', function (req, res) {

  var NInumber = req.query.NInumber;

  res.render('enquiriesv5/print_v2', { 'NInumber' : NInumber  });

});

// enquiriesv6 and enquiriesv7
router.get('/:prototype/results_confirm2', function (req, res) {
  var search = req.query.search ? req.query.search.toLowerCase() : '';
  res.render(`${req.params.prototype}/results_confirm2`, {
    'search': req.query.search,
    'QQ123456C': search === 'qq123456c',
    'DD678910C': search === 'dd678910c',
    'FF123456C': search === 'ff123456c',
    'FF654321B': search === 'ff654321b',
    'NK678910D': search === 'nk678910d',
    'NT678910A': search === 'nt678910a',
    'ZZ345678A': search === 'zz345678a',
    'BG345678A': search === 'bg345678a'
  });
});

router.get('/:prototype/ole_details', function (req, res) {
  var search = req.query.search ? req.query.search.toLowerCase() : '';
  res.render(':prototype/ole_details', {
    'search': req.query.search,
    'excluded': search === 'ff123456c',
    'included': search === 'qq123456c',
    'name': search === 'cd654321c',
    'address': search === 'nt109876c',
  });
});

router.get('/:prototype/issue_address_confirm', function (req, res) {
  // get the answer from the query string (eg. ?address_same=No)
  var details_same = req.query.details_same;
  if (details_same == "Yes") {
    // if address_same is any other value (or is missing) render the page requested
    res.render(`${req.params.prototype}/issue_address_confirm`);
  } else {
    // redirect to the relevant page
    res.redirect(`/${req.params.prototype}/issue_cant_details`);
  }
});


router.get('/:prototype/issue_address_alt', function (req, res) {
  // get the answer from the query string (eg. ?address_same=No)
  var address_UK = req.query.address_UK;
  if (address_UK == "Yes") {
    // if address_same is any other value (or is missing) render the page requested
    res.render(`${req.params.prototype}/issue_address_alt`);
  } else {
    // redirect to the relevant page
    res.redirect(`/${req.params.prototype}/forecast_alt`);
  }
});


router.get('/:prototype/issue_address_exclusion', function (req, res) {
  // get the answer from the query string (eg. ?address_same=No)
  var details_same2 = req.query.details_same2;
  if (details_same2 == "Yes") {
    // if address_same is any other value (or is missing) render the page requested
    res.render(`${req.params.prototype}/issue_address_exclusion`);
  } else {
    // redirect to the relevant page
    res.redirect(`/${req.params.prototype}/issue_cant_details`);
  }
});



router.get('/:prototype/print', function (req, res) {
  // get the answer from the query string (eg. ?address_same=No)
  var address_same = req.query.address_same;
  if (address_same == "Yes") {
    // if address_same is any other value (or is missing) render the page requested
    res.render(`${req.params.prototype}/print`);
  } else {
    // redirect to the relevant page
    res.redirect(`/${req.params.prototype}/issue_cant`);
  }
});

router.get('/:prototype/print_v2', function (req, res) {
  var NInumber = req.query.NInumber;
  res.render(`${req.params.prototype}/print_v2`, { 'NInumber': NInumber });
});

// contingency_mvp
router.get('/contingency_mvp/results_confirm2', function (req, res) {
  var search = req.query.search ? req.query.search.toLowerCase() : '';
  res.render('contingency_mvp/results_confirm2', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'name': search === 'cd654321c',
    'address': search === 'nt109876c',
    'special': search === 'ff123456c'
  });
});


router.get('/contingency_mvp/ole_details', function (req, res) {
  var search = req.query.search ? req.query.search.toLowerCase() : '';
  res.render('contingency_mvp/ole_details', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'name': search === 'cd654321c',
    'address': search === 'nt109876c',
    'special': search === 'ff123456c'
  });
});

router.get('/contingency_mvp/issue_address_confirm', function (req, res) {
  // get the answer from the query string (eg. ?address_same=No)
  var details_same = req.query.details_same;
  if (details_same == "Yes"){
    // if address_same is any other value (or is missing) render the page requested
    res.render('contingency_mvp/issue_address_confirm');
  } else {
    // redirect to the relevant page
    res.redirect('/contingency_mvp/issue_cant_details');
  }
});

router.get('/contingency_mvp/issue_address_exclusion', function (req, res) {
  // get the answer from the query string (eg. ?address_same=No)
  var details_same2 = req.query.details_same2;
  if (details_same2 == "Yes"){
    // if address_same is any other value (or is missing) render the page requested
    res.render('contingency_mvp/issue_address_exclusion');
  } else {
    // redirect to the relevant page
    res.redirect('/contingency_mvp/issue_cant_details');
  }
});

router.get('/contingency_mvp/print', function (req, res) {
  // get the answer from the query string (eg. ?address_same=No)
  var address_same = req.query.address_same;
  if (address_same == "Yes"){
    // if address_same is any other value (or is missing) render the page requested
    res.render('contingency_mvp/print');
  } else {
    // redirect to the relevant page
    res.redirect('/contingency_mvp/issue_cant');
  }
});

router.get('/contingency_mvp/print_v2', function (req, res) {
  var NInumber = req.query.NInumber;
  res.render('contingency_mvp/print_v2', { 'NInumber' : NInumber  });
});

// training_mvp



router.get('/training_mvp/results_confirm2', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('training_mvp/results_confirm2', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'excluded2': search === 'cd654321c',
    'address': search === 'nt109876c',
    'special': search === 'ff123456c'
  });
});


router.get('/training_mvp/ole_details', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('training_mvp/ole_details', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'name': search === 'cd654321c',
    'address': search === 'nt109876c',
    'special': search === 'ff123456c'
  });
});

router.get('/training_mvp/issue_address_confirm', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var details_same = req.query.details_same;

  if (details_same == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('training_mvp/issue_address_confirm');


  } else {

          // redirect to the relevant page
    res.redirect('/training_mvp/issue_cant_details');

  }

});

router.get('/training_mvp/issue_address_exclusion', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var details_same2 = req.query.details_same2;

  if (details_same2 == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('training_mvp/issue_address_exclusion');


  } else {

          // redirect to the relevant page
    res.redirect('/training_mvp/issue_cant_details');

  }

});



router.get('/training_mvp/print', function (req, res) {

  // get the answer from the query string (eg. ?address_same=No)
  var address_same = req.query.address_same;

  if (address_same == "Yes"){

    // if address_same is any other value (or is missing) render the page requested
    res.render('training_mvp/print');


  } else {

          // redirect to the relevant page
    res.redirect('/training_mvp/issue_cant');

  }

});

router.get('/training_mvp/print_v2', function (req, res) {

  var NInumber = req.query.NInumber;

  res.render('training_mvp/print_v2', { 'NInumber' : NInumber  });

});





//sprint 5

router.get('/sprint5/results', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('sprint5/results', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'included_address': search === 'zz123456c',
    'special': search === 'ff123456c'
  });

});

router.get('/sprint5/results_confirm', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('sprint5/results_confirm', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'included_address': search === 'zz123456c',
    'special': search === 'ff123456c'
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
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'included_address': search === 'zz123456c'
  });

});

router.get('/sprint3/results_confirm', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('sprint3/results_confirm', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
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
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
    'included_address': search === 'zz123456c'
  });

});


router.get('/sprint2/results_confirm', function (req, res) {

  var search = req.query.search ? req.query.search.toLowerCase() : '';

  res.render('sprint2/results_confirm', {
    'search' : req.query.search,
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
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
    'excluded': search === 'dd678910c',
    'included': search === 'qq123456c',
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
