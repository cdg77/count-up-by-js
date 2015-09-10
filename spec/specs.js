describe('countUpToBy', function() {

  it("counts up to a number", function() {
    expect(countUpToBy(7, 1)).to.eql([1, 2, 3, 4, 5, 6, 7]);
  });

  it('counts up to a number by given multiple', function() {
    expect(countUpToBy(8, 2)).to.eql([2, 4, 6, 8]);
  });
});
