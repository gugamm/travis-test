const sum = require('./index').sum;
const sub = require('./index').sub;
const expect = require('chai').expect;

describe('Root test', function () {
  it('should calculate correct sum', function () {
    expect(sum(1,2)).to.equal(3);
  });

  it('should calculate correct sub', function () {
    expect(sub(3,2)).to.equal(1);
  });
});