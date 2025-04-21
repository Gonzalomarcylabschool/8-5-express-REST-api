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
} = require('./controllers/fellowControllers');
const {
  serveStaffs,
  createStaff,
  serveStaff,
  updateStaff,
  deleteStaff,
} = require('./controllers/staffControllers');

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

//Fellow Endpoints

app.get('/api/fellows', serveFellows);
app.post('/api/fellows', createFellow);
app.get('/api/fellows/:id', serveFellow);
app.patch('/api/fellows/:id', updateFellow);
app.delete('/api/fellows/:id', deleteFellow);

//Staff Endpoints

app.get('/api/staff', serveStaffs);
app.post('/api/staff', createStaff);
app.get('/api/staff/:id', serveStaff);
app.patch('/api/staff/:id', updateStaff);
app.delete('/api/staff/:id', deleteStaff);

const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`));