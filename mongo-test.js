const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const dbName = 'studybuddyDB';

const client = new MongoClient(uri);

async function connectToMongo() {
  try {
    await client.connect();
    console.log('Connected successfully to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  } finally {
    await client.close();
  }
}

connectToMongo();