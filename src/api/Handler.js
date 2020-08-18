const Result = require('./Result');
class Handler {
    constructor(bCalculatorService){
        this.handleCalculation = async(event, context, callback)=>{
            try{
                let weight = event.queryStringParameters.weight;
                let height = event.queryStringParameters.height;

                if(isNaN(weight) || isNaN(height)){
                    return new Result.BadRequest_400();
                }
                let  bmiResult = await this.bCalculatorService.performCalculation(weight, height);
                return new Result.OK_200(bmiResult);
            }catch(e){
                return new Result.InternalServerError_500();
           }
        };
        this.bCalculatorService = bCalculatorService;
    }
}
exports.Handler = Handler;

