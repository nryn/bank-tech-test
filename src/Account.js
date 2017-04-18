function Account() {
  this.balance = 0;
  this.history = [];
};

Account.prototype.deposit = function(amount) {
  this.transact(amount);
};

Account.prototype.withdraw = function(amount) {
  this.transact(-amount);
};

Account.prototype.transact = function(amount) {
  this.balance += amount;
  this.history.push(new Transaction(amount, this.balance));
};

Account.prototype.printStatement = function() {
  return new Statement(this).print();
};
