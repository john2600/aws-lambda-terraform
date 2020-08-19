const Result = require('./Result');
const logger = require('../logger/Logger').logger;

class Handler {
    constructor(bCalculatorService){
        this.handleCalculation = async(event, context, callback)=>{           
            logger.info('Handle Calculatin json result='+JSON.stringify(event));
            try{
                let weight = event.queryStringParameters.weight;
                let height = event.queryStringParameters.height;
                if(isNaN(weight) || isNaN(height)){
                    return new Result.BadRequest_400('error trying to proccess values');
                }
                let  bmiResult = await this.bCalculatorService.performCalculation(weight, height);
                return new Result.OK_200(bmiResult);
            }catch(e){
                logger.error(`error has ocurred during calculation : message=${e}`)
                return new Result.InternalServerError_500(e);
           }
        };
        this.bCalculatorService = bCalculatorService;
    }
}
exports.Handler = Handler;
