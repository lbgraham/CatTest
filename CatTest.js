class CatTest {
  constructor() {}

  printResults(resultsObj) {
    const fs = require('fs')
    console.log(resultsObj.failedTestInfo.join('\n'));
    console.log(`
    Number of Tests Passed: ${resultsObj.passed}
    Number of Tests Failed: ${resultsObj.failed}

       Overall Cat Rating:`);

    if(resultsObj.passed / (resultsObj.passed + resultsObj.failed) > .75) {
      fs.readFile('asciiArt', (err, data) => {
        if (err) throw err;
        console.log(data.toString());
      });
    } else {
        fs.readFile('asciiArt2', (err, data) => {
          if (err) throw err;
          console.log(data.toString());
      });
    }
  }

  trackResults(func) {
    var testsPassed = 0;
    var testsFailed = 0;
    var failedArr = [];
    var results = {};

    return function() {
      var passed = func.apply(null, arguments);
      if (passed === 'passed') {
        testsPassed++;
      } else {
          testsFailed++;
          failedArr.push(passed);
      }

      results = {
        passed: testsPassed,
        failed: testsFailed,
        failedTestInfo: failedArr
      };

      return results;
    }
  }

  assertEqual(actual, expected, testName) {
    if(actual === expected) {
      return 'passed';
    } else {
      return `FAILED [ ${testName} ] Expected ${expected}, but got ${actual}`;
    }
  }

  runTests(arr) {
    var cumulativeResults = {};
    var testResults = this.trackResults(this.assertEqual);

    for(var i = 0; i < arr.length; i++) {
      var splitArgs = arr[i].split(',');
      if(i === arr.length - 1) {
        cumulativeResults = testResults(splitArgs[0], splitArgs[1], splitArgs[2]);
      } else {
        testResults(splitArgs[0], splitArgs[1], splitArgs[2]);
    }
  }

  this.printResults(cumulativeResults);
  }
}

module.exports = CatTest
