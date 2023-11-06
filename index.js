const express = require('express');

const app = express();

const USERS = [
  {
    "id": 1,
    "email": "george.bluth@reqres.in",
    "first_name": "George",
    "last_name": "Bluth",
    "avatar": "https://reqres.in/img/faces/1-image.jpg"
  },
  {
    "id": 2,
    "email": "janet.weaver@reqres.in",
    "first_name": "Janet",
    "last_name": "Weaver",
    "avatar": "https://reqres.in/img/faces/2-image.jpg"
  },
  {
    "id": 3,
    "email": "emma.wong@reqres.in",
    "first_name": "Emma",
    "last_name": "Wong",
    "avatar": "https://reqres.in/img/faces/3-image.jpg"
  },
  {
    "id": 4,
    "email": "eve.holt@reqres.in",
    "first_name": "Eve",
    "last_name": "Holt",
    "avatar": "https://reqres.in/img/faces/4-image.jpg"
  },
  {
    "id": 5,
    "email": "charles.morris@reqres.in",
    "first_name": "Charles",
    "last_name": "Morris",
    "avatar": "https://reqres.in/img/faces/5-image.jpg"
  },
  {
    "id": 6,
    "email": "tracey.ramos@reqres.in",
    "first_name": "Tracey",
    "last_name": "Ramos",
    "avatar": "https://reqres.in/img/faces/6-image.jpg"
  }
]

app.get('/', (req, res) => {
  res.send('We are learning Node.js')
})

app.get('/users', (req, res) => {
  res.json(USERS)
})

app.get('/users/odd', (req, res) => {
  res.json(USERS.filter(user => user.id % 2 != 0))
})

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/about.html')
})

app.get('/download-logo', (req, res) => {
  res.download(__dirname + '/instagram-logo.png')
})

app.listen(3000, () => {
  console.log('Server running successfully on http://localhost:3000')
})

/*
  ## HTTP Methods: (REST APIs)
  - GET
  - POST
  - PUT/PATCH
  - DELETE
*/































/*
  npm init -y
  npm install express --save
*/