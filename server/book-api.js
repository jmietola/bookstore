/* Very simple Rest-API for Bookstore */

const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()
const port = 3001

let books = {
	message:"Bookstore", 
	data: [{
	"id": '1',	
    "isbn": "9781594206191",
    "title": "Einstein's Unfinished Revolution: The Search for What Lies Beyond the Quantum",
    "author": "Lee Smolin",
    "publish_date": "2019-04-09",
    "publisher": "Penguin Press",
    "numOfPages": 352,
},{
	"id": '2',
    "isbn": "9781680920895",
    "title": "NASA Systems Engineering Handbook",
    "author": "Robert Shishko",
    "publish_date": "2017-07-01",
    "publisher": "12th Media Services",
    "numOfPages": 300,
},{
	"id": '3',
    "isbn": "9781250313621",
    "title": "Elon Musk: A Mission to Save the World",
    "author": "Anna Crowley Redding",
    "publish_date": "2019-07-01",
    "publisher": "Feiwel and Friends",
    "numOfPages": 256,
}]}

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/books', (req, res) => {
    const book = req.body;
    books.push(book);

    res.send('Book is added to the database');
});

app.get('/books', (req, res) => {	
    res.json(books);
});

app.get('/books/:isbn', (req, res) => {
    // reading isbn from the URL
    const isbn = req.params.isbn;
    // searching books for the isbn
    for (let book of books.data) {
        if (book.isbn === isbn) {
			booksCopy = {...books};
            booksCopy.data = [];
			booksCopy.data.push(book);
            res.json(booksCopy);
            return;
        }
    }
	
    res.status(404).send('Book not found');
});

app.delete('/books/:isbn', (req, res) => {
    // reading isbn from the URL
    const isbn = req.params.isbn;

    // remove item from the books array
    books = books.filter(i => {
        if (i.isbn !== isbn) {
            return true;
        }

        return false;
    });

    res.send('Book is deleted');
});

app.post('/books/:isbn', (req, res) => {
    // reading isbn from the URL
    const isbn = req.params.isbn;
    const newBook = req.body;

    // remove item from the books array
    for (let i = 0; i < books.length; i++) {
        let book = books[i]

        if (book.isbn === isbn) {
            books[i] = newBook;
        }
    }

    res.send('Book is edited');
});

app.listen(port, () => console.log(`Bookstore app listening on port ${port}!`));