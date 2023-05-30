const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

require('dotenv').config();

const port = process.env.PORT || 8080;

const URI = process.env.DB_CONNECTION;

const app = express();

app.use(express.json());
app.use(cors());

const client = new MongoClient(URI);

try {
  const con = await client.connect(); // prisijungiame prie duomenų bazės
  const data = await con
    .db('Duomenu bazes pavadinimas')
    .collection('Kolekcijos pavadinimas')
    .find()
    .toArray(); // išsitraukiame duomenis iš duomenų bazęs
  await con.close(); // uždarom prisijungimą prie duomenų bazės
  res.send(data);
} catch (error) {
  // 500 statusas - internal server error - serveris neapdorojo arba nežino kas per klaida
  res.status(500).send(error);
}

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
