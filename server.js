const express = require('express');
const req = require('express/lib/request');
const app = express();
const port = 3000;
const path = require('path');

// Body parser middleware to handle form data
app.use(express.urlencoded({ extended:true }));

// Serve Static files from the 'public' folder
app.use(express.static(path.join(__dirname, '..')));
app.use('/Images',express.static(path.join(__dirname,'..','..','Frontend','Images')));
app.use('/CSS',express.static(path.join(__dirname,'..','..','Frontend','CSS')));
app.use('/Javascript',express.static(path.join(__dirname,'..','..','Frontend','Javascript')));

// GET request to serve the order form
app.get('/',(req,res)=> {
  res.sendFile(path.join(__dirname, '..', '..', 'Frontend', 'HTML', 'Homepage.html'));
});

app.get('/Biography.html',(req,res)=> {
  res.sendFile(path.join(__dirname, '..', '..', 'Frontend', 'HTML', 'Biography.html'));
});

app.get('/contact.html',(req,res)=> {
  res.sendFile(path.join(__dirname, '..', '..', 'Frontend', 'HTML', 'contact.html'));
});

app.get('/orderonline.html',(req,res)=> {
  res.sendFile(path.join(__dirname, '..', '..', 'Frontend', 'HTML', 'orderonline.html'));
});

app.get('/menu.html',(req,res)=> {
  res.sendFile(path.join(__dirname, '..', '..', 'Frontend', 'HTML', 'menu.html'));
});

app.get('/foodblog.html',(req,res)=> {
  res.sendFile(path.join(__dirname, '..', '..', 'Frontend', 'HTML', 'foodblog.html'));
});

app.get('/Homepage.html',(req,res)=> {
  res.sendFile(path.join(__dirname, '..', '..', 'Frontend', 'HTML', 'Homepage.html'));
});

app.get('/CSS/style.css',(req,res)=> {
  res.sendFile(path.join(__dirname, '..', '..', 'Frontend', 'CSS', 'style.css'));
});

app.get('/Images',(req, res) =>{
  res.sendFile(path.join(__dirname, '..', '..','Frontend', 'Images'));
});

// POST request to handle form submission
// Endpoint to handle bill creation
app.post('/api/create-bill', (req, res) => {
  const cartItems = req.body;
 
  // Logic to process cart items and create bill
  // For demonstration purposes, let's assume the bill is a simple JSON object
  const bill = {
    items: cartItems.map(item => ({ name: item.name, quantity: 1, price: item.price, total: item.price })),
    total: cartItems.reduce((total, item) => total + item.price, 0)
  };
 
  res.json(bill);
});

 // Server listening
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});