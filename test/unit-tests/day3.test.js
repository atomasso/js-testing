import day3 from '../../src/day3';

describe('day 3 tests', () => {
	// GOTCHA - always call the done function within your test!
  it('should return expected value from callack', (done) => {
    day3((returnedData) => {
      expect(returnedData).to.equal('hello');
      done();
    });
  });

  // TWO DIFFERENT WAYS TO TEST PROMISES IN MOCHA
  // 1st
  it('should return expected value from promise with done', (done) => {
  	day3()
  	     .then((returnedData) => {
  	       expect(returnedData).to.equal('hello');
  	     	 done();
  	     });
  });
  // 2nd
  it('should return expected value from promise', () => {
  	// GOTCHA - YOU HAVE TO RETURN THE PROMISE!
  	// With async testing, if you don't return the promise, it looks like it will pass (try console log below)
  	return day3() 
  	    .then((returnedData) => {
  	    	//console.log('expectation called')
  	      expect(returnedData).to.equal('hello');
  	    })
  })
});
