class BCalculatorService {
  constructor(){
    this.performCalculation =( w, b) => {
      
      if(b==0){
        throw Error('Error input value, it should be major than 0');
      }

      let weight = parseFloat(w,10);
      let heigh = parseFloat(b, 10);
      return (weight / heigh / heigh * 10000).toFixed(2) ;
    }
  }

}

exports.BCalculatorService = BCalculatorService;
