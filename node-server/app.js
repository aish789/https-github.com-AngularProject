const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors
const app = express();
const PORT = 4000; 

app.use(bodyParser.json());
app.use(cors()); // Use cors middleware


const users = [
  { email: 'abc1234@gmail.com', password: '1234' },
  { email: 'abc@gmail.com', password: '12345'},
  
];

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.get('/favicon.ico', (req, res) => res.status(204));

// Login API
app.post('/Login', (req, res) => {
  const { email, password } = req.body;
 
  //console.log('Received email:', email);
  //console.log('Received password:', password);
  const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);

  if (user) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(400).json({ message: 'Invalid email or password' });
  }
});

// Get employee info API
app.get('/getEmployeeInfo', (req, res) => {
  
  const employees = [
    { id:'1',name: 'John', age: 30, gender: 'Male', designation: 'Software Engineer' },
    { id:'2',name: 'Jenny', age: 30, gender: 'Female', designation: 'Software Tester' },
    
  ];

  res.json(employees);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
