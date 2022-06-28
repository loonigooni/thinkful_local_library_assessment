function findAccountById(accounts = [], id) {
  return accounts.find(acc => acc.id === id)
}

function sortAccountsByLastName(accounts) {
  //return accounts sorted by last name alphabetically
  return accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1)
}

function getTotalNumberOfBorrows(account, books) {
  //set a variable that can access account
  const accountId = account.id
  return books.reduce((totalBorrowed, { borrows }) => {
    //if borrows match accountId, add one to totalBorrowed
    if (borrows.some((borrower) => borrower.id === accountId)) totalBorrowed++
    return totalBorrowed
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return (books.filter((book) => book.borrows[0].id === account.id && !book.borrows[0].returned).map((book) => {
    book["author"] = authors.find((author) => author.id === book.authorId)
      return book
  }))
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
