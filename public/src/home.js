function getTotalBooksCount(books) {
  //return length of books array
  return books.length
}

function getTotalAccountsCount(accounts) {
  //return length of accounts array
  return accounts.length
}

function getBooksBorrowedCount(books) {
  //return a number that represents the books currently checked out
  let borrowedBooks = 0
  //iterate through books and get each 'book'
  books.forEach(book => {
    //if the book is not returned, add one
    if (!book.borrows[0].returned) borrowedBooks++
  });
  return borrowedBooks
}

function getMostCommonGenres(books) {
  //.map() book genre
  const genresOfBooks = books.map((book) => book.genre)
  //declare empty array
  const commonGenres = []
  genresOfBooks.map((genre) => {
    //check to see if genre is already there
      const location = commonGenres.findIndex((element) => element.name === genre)
      //if the check is greater than 0, add one
      if (location >= 0) {
        commonGenres[location].count = commonGenres[location].count + 1
        //else push object { name: genre, count: 1 }
      } else {
        commonGenres.push({ name: genre, count: 1 })
      }
    });
    commonGenres.sort((a, b) => b.count - a.count)
    //get top 5
    if (commonGenres.length > 5) {
      return commonGenres.slice(0, 5)
    }
  return commonGenres
}

//create a function that can sort and array and return top 5 slices
function topFive(theTop) {
  let popularBooks = theTop.sort((countA, countB) => (countA.count < countB.count ? 1 : -1)).slice(0, 5)
  return popularBooks
}

function getMostPopularBooks(books) {
  let popularBooks = []
    let borrows = books.reduce((acc, book) => {
      popularBooks.push({ name: book.title, count: book.borrows.length })
    }, []);
  
    return topFive(popularBooks)
}

function getMostPopularAuthors(books, authors) {
  const popularAuthors = []
  //iterate through authors
  for (let author of authors) {
    //set constant to `${author.name.first} ${author.name.last}`
    const authorName = `${author.name.first} ${author.name.last}`
    //set variable to 0
    let count = 0
    //loop through books
    for (let book of books) {
      //check id of author and book
      if (author.id === book.authorId) {
        //add length of borrowed books to count variable
        count += book.borrows.length
      }
    }
    //create new object { name: authorName, count: count }
    const authorObject = { name: authorName, count: count }
    popularAuthors.push(authorObject)
  }

  return topFive(popularAuthors)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
