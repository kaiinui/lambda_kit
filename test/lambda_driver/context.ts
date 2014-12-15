/// <reference path="../../lambda.d.ts" />
declare var module: any;

class LambdaContext implements Context {
    invokeid:string;

    constructor (invokeid: string) {
        this.invokeid = invokeid;
    }

    done(err:any, value:string):void {
        return;
    }
}

(module).exports = new LambdaContext("someid");