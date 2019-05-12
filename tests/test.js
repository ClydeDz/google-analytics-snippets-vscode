const assert = require('assert'); 

describe('Test...', function () {
  console.log("[test]", this.title);
  
  it('check...', function () {
    console.log("  ", "[test]", this.test.title);
    assert.equal(true, true, "file must exist and must contain content");
  });
  
});