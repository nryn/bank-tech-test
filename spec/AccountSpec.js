describe("Account", function() {

  beforeEach(function() {
    account = new Account();
  });

  it("has an initial balance of zero", function() {
    expect(account.balance).toBe(0);
  });

  it("has an initially empty list for its non-existent history", function() {
    expect(account.history).toEqual([]);
  });

  describe("deposit", function() {

    it("changes the account balance", function() {
      account.deposit(100);
      expect(account.balance).toEqual(100);
    });

    it("adds to the history array", function(){
      account.deposit(100);
      expect(account.history.length).toEqual(1);
    });

    it("adds a transaction object to the history array", function(){
      account.deposit(100);
      expect(account.history[0].constructor.name).toEqual("Transaction");
    });

  });

  describe("withdraw", function() {

    it("changes the account balance", function() {
      account.withdraw(100);
      expect(account.balance).toEqual(-100);
    });

    it("adds to the history array", function(){
      account.withdraw(100);
      expect(account.history.length).toEqual(1);
    });

    it("adds a transaction object to the history array", function(){
      account.withdraw(100);
      expect(account.history[0].constructor.name).toEqual("Transaction");
    });

  });

  describe("printStatement", function() {

    it("returns a string with headers, if there's no past activity", function() {
      expect(account.printStatement()).toEqual("date || credit || debit || balance");
    });

    it("returns a string with headers, and data underneath, if there's activity", function(){
      account.withdraw(100);
      expect(account.printStatement()).toEqual("date || credit || debit || balance\n18-4-2017 ||  || 100 || -100");
    });

  });

});
