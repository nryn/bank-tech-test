describe("Statement", function() {

  beforeEach(function() {
    account = new Account();
    account.deposit(100);
    account.withdraw(10);
  });

  describe("print", function() {
    it("returns a string of account transaction data when instantiated with an account", function() {
      expect(new Statement(account).print()).toEqual("date || credit || debit || balance\n18-4-2017 || 100 ||  || 100\n18-4-2017 ||  || 10 || 90")
    });
  });

});
