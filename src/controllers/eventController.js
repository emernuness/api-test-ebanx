const eventService = require('../services/eventService');

const postEvent = (req, res) => {
  const { type, amount } = req.body;
  const response = eventService.processEvent(type, amount);
  res.status(201).json(response);
};

module.exports = { postEvent };