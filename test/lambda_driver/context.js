/// <reference path="../../lambda.d.ts" />

var LambdaContext = (function () {
    function LambdaContext(invokeid) {
        this.invokeid = invokeid;
    }
    LambdaContext.prototype.done = function (err, value) {
        return;
    };
    return LambdaContext;
})();

(module).exports = new LambdaContext("someid");
//# sourceMappingURL=context.js.map
