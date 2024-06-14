const processEvent = (type, amount) => {

    // Retorna apenas o evento recebido
    return { type, amount };
  };

module.exports = { processEvent };