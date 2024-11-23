const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

const numbers = [1, 4, 5, 7, 3, 8, 10];
const names = ['Rahul', 'Sita', 'Amit', 'Vikram'];
const employees = [
  {
    employeeId: 1,
    name: 'Amit',
  },
  {
    employeeId: 2,
    name: 'Sita',
  },
  {
    employeeId: 3,
    name: 'Rahul',
  },
];

const users = [
  {
    username: 'amit123',
    name: 'Amit',
    score: 9,
  },
  {
    username: 'sita456',
    name: 'Sita',
    score: 8,
  },
  {
    usernmae: 'rahul789',
    name: 'Rahul',
    score: 7,
  },
];

const contacts = [
  {
    phoneNumber: '1234567890',
    name: 'Rahul',
    address: '123 Street, City',
  },
  {
    phoneNumber: '1234567809',
    name: 'Amit',
    address: '456 Street, City',
  },
];

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

function findANumberInArray(numbersArray, number) {
  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] === number) {
      return number;
    }
  }
}

app.get('/numbers/find/:num', (req, res) => {
  const { num } = req.params;
  res.json(findANumberInArray(numbers, parseFloat(num)));
});

function findNameInArray(element, name) {
  if (element === name) {
    return name;
  }
}

app.get('/names/find/:name', (req, res) => {
  const { name } = req.params;
  const result = names.find((ele) => findNameInArray(ele, name));
  res.json(result);
});

function findEmployeeInArray(element, id) {
  if (element.employeeId === id) {
    return element;
  }
}

app.get('/employees/find/:id', (req, res) => {
  const { id } = req.params;
  const result = employees.find((ele) =>
    findEmployeeInArray(ele, parseFloat(id))
  );
  res.json(result);
});

function findUserInArray(element, userName) {
  if (element.username === userName) {
    return element;
  }
}

app.get('/users/find/:username', (req, res) => {
  const { username } = req.params;
  const result = users.find((ele) => findUserInArray(ele, username));
  res.json(result);
});

function findContactInArray(element, phoneNumber) {
  if (element.phoneNumber === phoneNumber) {
    return element;
  }
}

app.get('/contacts/find/:phoneNumber', (req, res) => {
  const { phoneNumber } = req.params;
  const result = contacts.find((ele) => findContactInArray(ele, phoneNumber));
  res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
