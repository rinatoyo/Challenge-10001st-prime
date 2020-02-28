var chai = require("chai");
var expect = chai.expect;
var primeFinder = require("../prime-finder.js");

describe("Find a given prime number", function() {
  it("6th prime number", function() {
    var result = primeFinder(6);
    expect(result).to.equal(13);
  });

  it("10001 prime number", function() {
    var result = primeFinder(10001);
    expect(result).to.equal(104743);
  });
});
