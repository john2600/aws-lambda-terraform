const Handler = require('./api/Handler').Handler;
const BCalculatorService = require('./service/BCalculatorService').BCalculatorService;
const handler = new Handler(new BCalculatorService());

exports.performCalculation = handler.handleCalculation;
