describe('countUpBy', function() {
  it("counts up to a number", function() {
    expect(countUpBy(7)).to.eql([1, 2, 3, 4, 5, 6, 7]);
  });
});
