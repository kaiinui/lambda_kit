/// <reference path="lambda.d.ts" />

exports.handler = function (event, context) {
    console.log("whoa!");
    console.log(event.hoge);

    context.done(null, "done!");
};
//# sourceMappingURL=app.js.map
