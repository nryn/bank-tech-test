describe("Transaction", function() {

  beforeEach(function() {
    transaction = new Transaction(10, 20);
    dateToCompare = new Date();
  });

  it("has a date", function() {
    expect(transaction.date).toEqual(dateToCompare)
  });

  it("has an amount", function() {
    expect(transaction.amount).toEqual(10);
  });

  it("has the updated balance", function() {
    expect(transaction.updatedBalance).toEqual(20);
  });

});
