function Statement(account) {
  this.account = account;
};

Statement.prototype.print = function () {
  var output = "date || credit || debit || balance";
  this.account.history.forEach(transaction => output += formatLine(transaction));
  return output;
};

var formatLine = function(transaction) {
  var formattedDate = [transaction.date.getDate() + "-" + (transaction.date.getMonth()+1) + "-" + transaction.date.getFullYear()];
  var transactionDetails = (transaction.amount < 0) ? [undefined, -transaction.amount] : [transaction.amount, undefined];
  var updatedBalance = [transaction.updatedBalance];
  var fullLine = [].concat.apply([], [formattedDate, transactionDetails, updatedBalance]);
  return "\n" + fullLine.join(" || ");
};
