const sum = require('./index');
const expect = require('chai').expect;

describe('Root test', function () {
  it('should calculate correct sum', function () {
    expect(sum(1,2)).to.equal(3);
  });
});