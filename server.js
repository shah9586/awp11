const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const uri = 'mongodb://localhost:27017';
const dbName = 'studybuddyDB';
const collectionName = 'users';

let db;

async function connectToMongo() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log('Connected successfully to MongoDB');
    db = client.db(dbName);
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit the process if MongoDB connection fails
  }
}

connectToMongo();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const result = await db.collection(collectionName).insertOne({ name, email, password });
    res.status(201).send('User registered successfully');
  } catch (err) {
    res.status(500).send('Error registering user');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});