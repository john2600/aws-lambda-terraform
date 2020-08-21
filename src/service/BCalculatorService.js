const logger = require('../logger/Logger').logger;

class BCalculatorService {
  constructor(){
    
    this.performCalculation =( w, b) => {
      logger.info(`BCalculatorService: w=${w}, b=${b}`);
      if(b==0){
        throw Error('Error input value, it should be major than 0');
      }

      let weight = parseFloat(w,10);
      let heigh = parseFloat(b, 10);
      logger.info(`BCalculatorService: w=${weight}, b=${heigh}`);
      return (weight / heigh / heigh * 10000).toFixed(2) ;
    }
  }

}

exports.BCalculatorService = BCalculatorService;
