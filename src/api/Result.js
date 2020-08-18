const headers = {'content-type':'application/json'};

class OK_200 {
    constructor(message){
        this.statusCode=200;
        this.headers= this.headers;
        this.body = JSON.stringify({'result':message});
        this.isBased64Encoded = false;
    }
}

class BadRequest_400 {
    constructor(message){
        this.statusCode=400;
        this.headers= this.headers;
        this.body = JSON.stringify({'error':message});
        this.isBased64Encoded = false;
    }
}

class InternalServerError_500 {
    constructor(e){
        this.statusCode=500;
        this.headers= this.headers;
        this.body = JSON.stringify({'result':e.message});
        this.isBased64Encoded = false;
    }
}

exports.BadRequest_400 = OK_200;
exports.InternalServerError_500=InternalServerError_500;
exports.OK_200 = OK_200;
