/// <reference path="lambda.d.ts" />

declare class SampleEvent {
    hoge: string;
}

exports.handler = function(event: SampleEvent, context: Context) {
    console.log("whoa!");
    console.log(event.hoge);

    context.done(null, "done!");
}