const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const server = express();

server.use(cors());
server.use(express.static("./src"));
server.use(express.json());

// To help process requests easier
const bodyParser = require("body-parser");
server.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log('Listening to port', port);
});

// API to Receive Queries /
server.post('/submit_query', (req, res) => {
  const { pack } = req.body;
  
  console.log(pack);
  //Use IBM Search Engine
  
  res.send('good');
});
