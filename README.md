How to start mock server and react application:

1. Create a MOCK REST API using json-server npm module. In short, JSON Server is a Node module, running an Express server, that let's you specify a JSON file to act as a data source for your mock REST API.

> npm install -g json-server

> json-server -p 4000 catalog/books.json

This starts the server on port 4000 of local machine. http://localhost:4000/

2. Start react

> cd library
> npm start

This will run your react application on port 3000 of local machine. http://localhost:3000/

Project Functionality:

1. You can checkout 2 books at a time.
2. A random date is shown as a checkout date.
3. The number of books checked out is shown on top.
4. If max limit reached, you need to return a book in order to checkout again.