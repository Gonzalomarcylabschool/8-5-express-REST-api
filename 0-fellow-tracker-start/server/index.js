////////////////////////
// Imports
////////////////////////

const express = require('express');
const path = require('path');
const getId = require('./utils/getId');
const {
  serveFellows,
  createFellow,
  serveFellow,
  updateFellow,
  deleteFellow,
} = require('./controllers/fellowsControllers');

////////////////////////
// Constants
////////////////////////

const app = express();
const pathToFrontendDist = path.join(__dirname, '../frontend/dist');

// Mock Database

////////////////////////
// Middleware
////////////////////////

const logRoutes = (req, res, next) => {
  const time = (new Date()).toLocaleString();
  req.time = time;
  console.log(`${req.method}: ${req.originalUrl} - ${time}`);
  next();
};

const serveStatic = express.static(pathToFrontendDist);

app.use(logRoutes);   // Print out every incoming request
app.use(serveStatic); // Serve static public/ content
app.use(express.json());

////////////////////////
// Endpoints
////////////////////////

app.get('/api/fellows', serveFellows);
app.post('/api/fellows', createFellow);
app.get('/api/fellows/:id', serveFellow);
app.patch('/api/fellows/:id', updateFellow);
app.delete('/api/fellows/:id', deleteFellow);

const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`));