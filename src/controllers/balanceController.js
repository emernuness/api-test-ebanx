const getBalance = (req, res) => {
    res.status(200).json({ balance: 100 });
  };
  
  module.exports = { getBalance };