function findAuthorById(authors, id) {
  //return author if author.id matches id
  return authorById = authors.find(author => author.id == id)
}

function findBookById(books, id) {
   //return book if book.id matches id
  return bookById = books.find(book => book.id == id)
}

function partitionBooksByBorrowedStatus(books) {
  //create an array with returned books by using .filter()
  const returned = books.filter((book) => book.borrows[0].returned)
  //create an array with unreturned books by using .filter()
  const unreturned = books.filter ((book) => !book.borrows[0].returned)
  //return both arrays nested in an array
  return [unreturned, returned]
}

function getBorrowersForBook(book, accounts) {
  //set a variable that can access book
  const { borrows } = book
    //set a variable to .map() borrows
    const borrower = borrows.map(({ id, returned })=> {
      //use .find() to match account with borrowers id
      const account = accounts.find(account => account.id === id)
       // return the matching account with the returned books
      return {
        ...account,
        returned,
      };
    });
    //return the top ten borrowers using .sort() and order the companies alphabetically
    return borrower.sort((borrowA, borrowB) => {
        const companyA = borrowA.company
        const companyB = borrowB.company
        return companyA.localeCompare(companyB)
      })
      .slice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
