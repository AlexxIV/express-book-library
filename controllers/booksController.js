const Book = require('../data/Book')


module.exports = {
    getAddBook: (req, res) => {
        res.render('books/add')
    },
    postAddBook: (req, res) => {
        let book = req.body

        if(!book.title || !book.imageUrl) {
            book.error = 'Please fill all fields'
            res.render('books/add', book)
        } else {
            console.log(book.releaseDate)
            if (!book.releaseDate) {
                book.releaseDate = null
            }
        console.log(book.releaseDate)
        let success = 'Book added!'
        Book.create(book).then(() => {
            res.render('books/add', {success} )
        })
    }
    },
    getAll: (req, res) => {
        Book
        .find()
        .sort('-releaseDate')
        .then(books => {
            res.render('books/all', { books })
        })
    },
    getDetails: (req, res) => {
        const id = req.params.id
        
        Book
            .findById(id)
            .then(book => {
                res.render('books/details', book)
            })
    }
}