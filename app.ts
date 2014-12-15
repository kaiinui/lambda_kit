/// <reference path="lambda.d.ts" />

exports.handler = function(event: S3PutEvent, context: Context) {
    console.log(event.Records[0].eventVersion);
    console.log(event.Records[0].s3.object.key);

    context.done(null, "done!");
}