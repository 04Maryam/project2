// Load express module
const express = require('express');
// Initialize router functionality from express framework.
const router = express.Router();
// Require index controller
const eventCtrl = require('../controllers/event');

// router.get('/', eventCtrl.event_index_get);